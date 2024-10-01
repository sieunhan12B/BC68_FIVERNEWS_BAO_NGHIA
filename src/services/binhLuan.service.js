import { http } from "./config";

export const binhLuanService = {
  layBinhLuanTheoMaCongViec: (data) => {
    return http.get(`binh-luan/lay-binh-luan-theo-cong-viec/${data}`);
  },
  guiBinhLuan: (token, data) => {
    return http.post("/binh-luan", data, {
      headers: {
        token,
      },
    });
  },
};
