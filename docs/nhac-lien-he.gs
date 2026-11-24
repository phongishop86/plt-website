/**
 * Nhắc nhân viên liên hệ / báo giá khách (Google Apps Script, miễn phí).
 *
 * Cách dùng:
 * 1. Mở Google Sheet nhận yêu cầu > Tiện ích mở rộng > Apps Script, dán toàn bộ file này.
 * 2. Sửa NHAN_VIEN bên dưới thành email nhân viên (nhiều người cách nhau bằng dấu phẩy).
 * 3. Triển khai Web app (xem doPost) và copy URL dán vào biến LEAD_WEBHOOK_URL trên Vercel.
 * 4. Chạy hàm taoLichNhac một lần (cấp quyền khi được hỏi). Sau đó: baoKhachMoi chạy mỗi 5 phút
 *    (email báo khách mới), nhacLienHe chạy mỗi 30 phút (nhắc khách quá hạn).
 *
 * Cột Sheet (do website ghi): A Thời gian | B Họ tên | C SĐT | D Dịch vụ | E Nhu cầu
 * F Email | G Nguồn | H Đồng ý dữ liệu | I Trạng thái | J Hạn liên hệ | K Đã báo (script tự ghi)
 * Nhân viên liên hệ xong thì đổi cột I từ "Mới" thành "Đã liên hệ" (hoặc "Đã báo giá").
 * Dòng nào còn "Mới" quá hạn sẽ được nhắc, tối đa 1 lần mỗi 4 giờ, trong 08:00-18:00.
 */
const NHAN_VIEN = "phatloctech.ltd@gmail.com";
const BI_MAT = ""; // tùy chọn: đặt một chuỗi bí mật, rồi khai báo cùng giá trị ở LEAD_WEBHOOK_SECRET trên Vercel
const TEN_SHEET = "Sheet1";
const NHAC_LAI_SAU_GIO = 4;

// Nhận yêu cầu từ website (Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone)
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (BI_MAT && d.secret !== BI_MAT) return json({ success: false, error: "unauthorized" });
    if (!d.name || !d.phone) return json({ success: false, error: "missing" });
    const sheet = SpreadsheetApp.getActive().getSheetByName(TEN_SHEET);
    const now = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "HH:mm:ss dd/MM/yyyy");
    sheet.appendRow([now, d.name, d.phone, d.service, d.note, d.email, d.source, "Đồng ý xử lý dữ liệu: " + d.consentAt, "Mới", d.dueAt, "đã báo"]);
    MailApp.sendEmail({
      to: NHAN_VIEN,
      subject: `[Phát Lộc Tech] Khách mới: ${d.name} (${d.phone}) - gọi trước ${d.dueAt}`,
      body: `Họ tên: ${d.name}\nSĐT: ${d.phone}\nEmail: ${d.email || "(không)"}\nDịch vụ: ${d.service}\nNguồn: ${d.source}\nHạn liên hệ: ${d.dueAt}\n\n${d.note || ""}`,
    });
    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: String(err) });
  }
}
function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function taoLichNhac() {
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("nhacLienHe").timeBased().everyMinutes(30).create();
  ScriptApp.newTrigger("baoKhachMoi").timeBased().everyMinutes(5).create();
}

// Báo ngay (trong vòng 5 phút) cho nhân viên khi có khách mới, không cần FormSubmit.
// Dùng cột K để đánh dấu dòng đã báo ("đã báo").
function baoKhachMoi() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(TEN_SHEET);
  const rows = sheet.getDataRange().getValues();
  const moi = [];
  for (let i = 1; i < rows.length; i++) {
    const [tg, ten, sdt, dichVu, nhuCau, email, nguon, , trangThai, han, daBao] = rows[i];
    if (String(trangThai).trim() !== "Mới" || daBao) continue;
    moi.push({ dong: i + 1, text: `${ten} - ${sdt} - ${dichVu}\nEmail: ${email || "(không)"} | Nguồn: ${nguon} | Nhập lúc: ${tg} | Gọi trước: ${han}\n${String(nhuCau).replace(/\n/g, " | ")}` });
  }
  if (!moi.length) return;
  MailApp.sendEmail({
    to: NHAN_VIEN,
    subject: `[Phát Lộc Tech] Khách mới: ${moi.length} yêu cầu cần liên hệ`,
    body: moi.map((m) => m.text).join("\n\n") + "\n\nMở Google Sheet để cập nhật cột I sau khi liên hệ.",
  });
  moi.forEach((m) => sheet.getRange(m.dong, 11).setValue("đã báo"));
}

function nhacLienHe() {
  const gio = Number(Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "H"));
  if (gio < 8 || gio >= 18) return; // ngoài giờ làm việc

  const sheet = SpreadsheetApp.getActive().getSheetByName(TEN_SHEET);
  const rows = sheet.getDataRange().getValues();
  const props = PropertiesService.getScriptProperties();
  const now = Date.now();
  const quaHan = [];

  for (let i = 1; i < rows.length; i++) {
    const [tg, ten, sdt, dichVu, nhuCau, , nguon, , trangThai, han] = rows[i];
    if (String(trangThai).trim() !== "Mới") continue;
    const hanMs = parseVnDate(han);
    if (!hanMs || hanMs > now) continue;
    const key = "nhac_" + (i + 1);
    const lanCuoi = Number(props.getProperty(key) || 0);
    if (now - lanCuoi < NHAC_LAI_SAU_GIO * 3600 * 1000) continue;
    props.setProperty(key, String(now));
    quaHan.push(`Dòng ${i + 1}: ${ten} - ${sdt} - ${dichVu} (nhập lúc ${tg}, hạn ${han}, nguồn ${nguon})\n   ${String(nhuCau).replace(/\n/g, " | ")}`);
  }

  if (!quaHan.length) return;
  MailApp.sendEmail({
    to: NHAN_VIEN,
    subject: `[Phát Lộc Tech] ${quaHan.length} khách quá hạn chưa liên hệ`,
    body:
      "Các yêu cầu sau còn trạng thái \"Mới\" và đã quá hạn liên hệ:\n\n" +
      quaHan.join("\n\n") +
      "\n\nLiên hệ xong, đổi cột I trong Google Sheet thành \"Đã liên hệ\" hoặc \"Đã báo giá\" để ngừng nhắc.",
  });
}

// "13:45:02 24/11/2026" hoặc "24/11/2026 13:45:02" (định dạng vi-VN) -> mili giây
function parseVnDate(v) {
  if (v instanceof Date) return v.getTime();
  const m = String(v).match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s+(\d{1,2})\/(\d{1,2})\/(\d{4})/) ||
    String(v).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if (!m) return 0;
  const s = String(v);
  const timeFirst = s.indexOf(":") < s.indexOf("/");
  const [h, mi, se, d, mo, y] = timeFirst
    ? [m[1], m[2], m[3] || 0, m[4], m[5], m[6]]
    : [m[4], m[5], m[6] || 0, m[1], m[2], m[3]];
  // giờ Việt Nam = UTC+7
  return Date.UTC(+y, +mo - 1, +d, +h - 7, +mi, +se);
}
