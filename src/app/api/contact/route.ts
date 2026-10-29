import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LEAD_EMAIL = "phatloctech.ltd@gmail.com";
const SITE_ORIGIN = "https://www.phatloctech.vn";

type Lead = {
  name: string;
  phone: string;
  email: string;
  service: string;
  note: string;
  source: string;
};

const clip = (v: unknown, max: number) =>
  (typeof v === "string" ? v : "").trim().slice(0, max);

// Kênh 1: ghi vào Google Sheet (chỉ chạy khi đã cấu hình biến môi trường)
async function saveToSheet(lead: Lead): Promise<boolean> {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) return false;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ auth, version: "v4" });
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
            lead.name,
            lead.phone,
            lead.service,
            lead.note,
            lead.email,
            lead.source,
          ],
        ],
      },
    });
    return true;
  } catch (error) {
    console.error("[contact] Lỗi ghi Google Sheets:", error);
    return false;
  }
}

// Kênh 2: gửi email qua FormSubmit (gọi từ máy chủ, có giới hạn thời gian)
async function sendEmail(lead: Lead): Promise<boolean> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: SITE_ORIGIN,
        Referer: `${SITE_ORIGIN}/`,
      },
      body: JSON.stringify({
        _subject: `[Phát Lộc Tech] Yêu cầu tư vấn mới - ${lead.name} (${lead.phone})`,
        _template: "table",
        _captcha: "false",
        "Họ và Tên": lead.name,
        "Số điện thoại": lead.phone,
        Email: lead.email || "(không nhập)",
        "Loại dịch vụ quan tâm": lead.service,
        "Chi tiết nhu cầu": lead.note || "(không nhập)",
        "Gửi từ": lead.source,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[contact] FormSubmit trả về", res.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[contact] Lỗi gửi email FormSubmit:", error);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  // Ô ẩn chống spam: người thật không điền, bot thường điền
  if (clip(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const lead: Lead = {
    name: clip(body.name, 120),
    phone: clip(body.phone, 30),
    email: clip(body.email, 120),
    service: clip(body.service, 120) || "Khác",
    note: clip(body.note, 2000),
    source: clip(body.source, 60) || "website",
  };

  if (!lead.name || !lead.phone) {
    return NextResponse.json(
      { error: "Vui lòng cung cấp Họ tên và Số điện thoại" },
      { status: 400 }
    );
  }
  if (!/^[0-9+().\s-]{8,20}$/.test(lead.phone)) {
    return NextResponse.json(
      { error: "Số điện thoại chưa đúng định dạng" },
      { status: 400 }
    );
  }

  // Chạy song song; chỉ cần 1 kênh thành công là đã nhận được yêu cầu
  const [sheetOk, emailOk] = await Promise.all([saveToSheet(lead), sendEmail(lead)]);

  if (!sheetOk && !emailOk) {
    console.error("[contact] Không kênh nào nhận được yêu cầu:", {
      name: lead.name,
      phone: lead.phone,
      service: lead.service,
      source: lead.source,
    });
    return NextResponse.json(
      { error: "Chưa gửi được yêu cầu. Vui lòng thử lại hoặc gọi hotline." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
