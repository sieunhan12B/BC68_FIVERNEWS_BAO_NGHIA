import React from "react";
import { pathDefault } from "../../common/path";
import { Link } from "react-router-dom";
import IconHome from "../Icon/IconHome";
const BreadcrumbsDetail = (item) => {
  console.log(item);

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className=" flex my-3">
          <li>
            <Link to={pathDefault.homePage}>
              <IconHome />
            </Link>
          </li>
          <li>
            <span className="mx-2"> / </span>
            <Link>{item.item.tenLoaiCongViec} </Link>
          </li>
          <li>
            <span className="mx-2"> / </span>
            <Link>{item.item.tenNhomChiTietLoai} </Link>
          </li>
          <li>
            <span className="mx-2"> / </span>
            <Link>{item.item.tenChiTietLoai} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbsDetail;
