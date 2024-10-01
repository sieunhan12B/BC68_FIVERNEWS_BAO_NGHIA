import React from "react";
import { ButtonPackage } from "./ButtonPackage";

export const PackageDetail = (item) => {
  let arrMoTaNgan = item.item.congViec.moTaNgan.split("\r\n");
  let arrMoTaNgan2 = arrMoTaNgan.slice(-6);
  return (
    <div className="package">
      <div className=" flex justify-between text-2xl font-bold mb-2">
        {/* tên loại dịch vụ  */}
        <span className="text-sm capitalize ">{arrMoTaNgan[0]}</span>
        {/* giá tiền  */}
        <span> {arrMoTaNgan[1]}</span>
      </div>

      {/* xuống dòng  */}
      <p>{arrMoTaNgan[2]}</p>

      {/* des  */}
      <p>{arrMoTaNgan[3]}</p>

      {/* delivery  */}
      <p className="font-bold mt-2">{arrMoTaNgan[4]}</p>

      {/* revision  */}
      <p>{arrMoTaNgan[5]}</p>

      {/* các ưu đãi  */}
      {arrMoTaNgan2.map((item, index) => {
        return (
          <div className=" mt-4 space-y-2">
            <div className="flex space-x-2 items-center">
              <i class="fa-solid fa-check"></i>
              <p className="text-gray-500"> {item}</p>
            </div>
          </div>
        );
      })}
      <ButtonPackage />
    </div>
  );
};
