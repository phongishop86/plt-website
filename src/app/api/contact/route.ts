import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, note } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp Tên và Số điện thoại" },
        { status: 400 }
      );
    }

    // Initialize Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Replace escaped newline characters from the env variable
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Append to Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
            name,
            phone,
            service,
            note || "",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Lỗi ghi dữ liệu vào Google Sheets:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi lưu dữ liệu", message: error.message },
      { status: 500 }
    );
  }
}
