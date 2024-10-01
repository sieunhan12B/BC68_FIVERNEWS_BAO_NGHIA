import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  layCongViecChiTietTheoMa: (data) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${data}`);
  },
};
