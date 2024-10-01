import { http } from "./config";
export const thueCongViec = {
  postThueCongViec: (token, data) => {
    return http.post("/thue-cong-viec", data, {
      headers: {
        token,
      },
    });
  },
};
