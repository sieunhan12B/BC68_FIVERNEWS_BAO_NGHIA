import React, { useContext } from "react";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thueCongViec } from "../../services/thueCongViec.service";

import dayjs from "dayjs";
export const ButtonPackage = () => {
  const toDay = dayjs();
  const navigate = useNavigate();
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice);
  console.log(user);
  return (
    <button
      onClick={() => {
        if (user) {
          thueCongViec
            .postThueCongViec(user.token, {
              ngayThue: `${toDay.format}`,
            })
            .then((res) => {
              console.log(res);
              handleNotification(res.data.message, "success");
            })
            .catch((err) => {
              console.log(err);
              handleNotification("Thêm mới thất bại", "error");
            });
        } else {
          handleNotification(
            "Vui lòng đăng nhập tài khoản để tiếp tục",
            "info"
          );
          navigate("/dang-nhap");
        }
      }}
      className="w-full bg-black text-white py-2 mt-5"
    >
      Continue
    </button>
  );
};
