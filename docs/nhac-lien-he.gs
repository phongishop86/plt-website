/**
 * Nhắc nhân viên liên hệ / báo giá khách (Google Apps Script, miễn phí).
 *
 * Cách dùng:
 * 1. Mở Google Sheet nhận yêu cầu > Tiện ích mở rộng > Apps Script, dán toàn bộ file này.
 * 2. Sửa NHAN_VIEN bên dưới thành email nhân viên (nhiều người cách nhau bằng dấu phẩy).
 * 3. Chạy hàm taoLichNhac một lần (cấp quyền khi được hỏi). Sau đó script tự chạy mỗi 30 phút.
 *
 * Cột Sheet (do website ghi): A Thời gian | B Họ tên | C SĐT | D Dịch vụ | E Nhu cầu
 * F Email | G Nguồn | H Đồng ý dữ liệu | I Trạng thái | J Hạn liên hệ
 * Nhân viên liên hệ xong thì đổi cột I từ "Mới" thành "Đã liên hệ" (hoặc "Đã báo giá").
 * Dòng nào còn "Mới" quá hạn sẽ được nhắc, tối đa 1 lần mỗi 4 giờ, trong 08:00-18:00.
 */
const NHAN_VIEN = "phatloctech.ltd@gmail.com";
const TEN_SHEET = "Sheet1";
const NHAC_LAI_SAU_GIO = 4;

function taoLichNhac() {
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("nhacLienHe").timeBased().everyMinutes(30).create();
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
