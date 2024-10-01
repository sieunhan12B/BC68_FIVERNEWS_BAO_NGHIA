import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { pathDefault } from "../../common/path";
import IconHome from "../../components/Icon/IconHome";
import { congViecService } from "../../services/congViec.service";
import { switchTab } from "../../utils/switchTab";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Collapse } from "antd";
import avatarDefault from "./../../assets/img/avatarDefault.jpg";
import "./DetailPage.scss";
import { binhLuanService } from "../../services/binhLuan.service";
import { useSelector } from "react-redux";
import { thueCongViec } from "../../services/thueCongViec.service";
import { NotificationContext } from "../../App";
import BreadcrumbsDetail from "../../components/BreadcrumbsDetail/BreadcrumbsDetail";
import ReviewBoard from "../../components/ReviewBoard/ReviewBoard";
import CommentDetail from "../../components/CommentDetail.jsx/CommentDetail";
import { PackageDetail } from "../../components/PackageDetail/PackageDetail";
import { ButtonPackage } from "../../components/PackageDetail/ButtonPackage";
const DetailPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [detailJob, setDetailJob] = useState([]);
  const [comment, setComment] = useState([]);

  const [commentUser, setCommentUser] = useState({
    noiDung: "",
  });
  const { handleNotification } = useContext(NotificationContext);

  const { user } = useSelector((state) => state.authSlice);
  console.log(user);
  useEffect(() => {
    let idCongViec = searchParam.get("id");
    congViecService
      .layCongViecChiTietTheoMa(idCongViec)
      .then((res) => {
        console.log(res);
        setDetailJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    binhLuanService
      .layBinhLuanTheoMaCongViec(idCongViec)
      .then((res) => {
        console.log(res);
        setComment(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParam.get("id")]);

  const itemsCollapse = [
    {
      key: "1",
      label: "What file formats do you include in the final delivery?",
      children: (
        <p>
          I will include JPG presentations and high resolution transparent (no
          background) PNG files and the vector AI (Adobe Illustrator) file+ The
          logo PDF. SVG, EPS, DWG files can be delivered if requested.
        </p>
      ),
    },
    {
      key: "2",
      label: "How does it work ?",
      children: (
        <p>
          The general idea is that I will deliver several initial concepts
          (depending on which package you choose) based on your requirements. We
          will then refine and finalize the concept of your choice. All designs
          are unique and custom made!
        </p>
      ),
    },
    {
      key: "3",
      label: "How fast will it be?",
      children: (
        <p>
          Initial concepts within the first 24 hours (most likely first 12
          hours) and then we can adjust the logo as per your choice.
        </p>
      ),
    },
    {
      key: "4",
      label: "I'm still not sure, can I see your sample work??",
      children: <p>I'm still not sure, can I see your sample work?</p>,
    },
  ];

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const renderDetailJob = () => {
    return (
      <>
        {detailJob.map((item, index) => {
          let arrMoTa = item.congViec.moTa.split("\r\n");
          let arrMoTa2 = arrMoTa.splice(1);

          return (
            <>
              <BreadcrumbsDetail item={item} />
              <div className="detail-job">
                <div className="container">
                  <div className="detail-content  flex space-x-20 max-lg:flex-wrap ">
                    {/* Cột bên trái  */}
                    <div className="max-lg:order-2 max-lg:w-full detail-content-left w-3/5 space-y-10">
                      {/*khái quát công việc */}
                      <div className="overview-job">
                        {/* tên job  */}
                        <h2 className="font-semibold text-3xl my-8">
                          {item.congViec.tenCongViec}
                        </h2>
                        {/* info tác giả  */}
                        <div className="flex space-x-3 items-center">
                          {/* avatar  */}
                          <img
                            className="w-16 h-16 rounded-full"
                            src={item.avatar}
                            alt=""
                          />
                          {/* Tên người tạo, sao và đánh giá  */}
                          <div className="">
                            <div className=" flex space-x-3">
                              <h4 className="font-semibold capitalize text-xl">
                                {item.tenNguoiTao}
                              </h4>
                              <span>|</span>
                              <p className="bg-blue-950 font-semibold px-2 text-white">
                                Fiver's{" "}
                                <span className="text-green-500">choice</span>
                              </p>
                            </div>

                            {/* đánh giá  */}
                            <div className="flex space-x-2 items-center">
                              <i className="fa-solid fa-star text-black "></i>
                              <span className="font-semibold">
                                {item.congViec.saoCongViec}
                              </span>
                              <span className="text-gray-400 ">
                                (
                                <span className="underline">
                                  {item.congViec.danhGia}
                                </span>
                                )
                              </span>
                            </div>
                          </div>
                        </div>
                        <img
                          className="w-full my-8"
                          src={item.congViec.hinhAnh}
                          alt=""
                        />
                      </div>
                      {/* mô tả chi tiết công việc  */}
                      <div className="job-des space-y-3">
                        {/* title  */}
                        <div className="job-title mt-32">
                          <h2 className="text-3xl font-semibold my-8">
                            {arrMoTa[0]}
                          </h2>
                        </div>
                        {/* content  */}
                        <div className="job-content">
                          <p className="my-5">{arrMoTa[1]}</p>

                          {arrMoTa2.map((item, index) => {
                            // ưu điểm
                            return (
                              <div className=" ">
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </div>
                        <p>
                          -----------------------------------------------------------------------
                        </p>
                      </div>
                      {/* về tác giả  */}
                      <div className="about-seller">
                        {/* title  */}
                        <h2 className="font-semibold text-3xl  my-8">
                          About seller
                        </h2>

                        {/* info tác giả  */}
                        <div className="flex space-x-3 items-center">
                          {/* avatar  */}
                          <img
                            className="w-16 h-16 rounded-full"
                            src={item.avatar}
                            alt=""
                          />
                          {/* Tên người tạo, sao và đánh giá  */}
                          <div className="">
                            <div className=" flex space-x-3">
                              <h4 className="font-semibold capitalize text-xl">
                                {item.tenNguoiTao}
                              </h4>
                              <span>|</span>
                              <p className="bg-blue-950 font-semibold px-2 text-white">
                                Fiver's{" "}
                                <span className="text-green-500">choice</span>
                              </p>
                              <p className="border border-green-600 text-green-600 rounded-full px-2 ">
                                <i class="fa-solid fa-circle-dot mr-1"></i>
                                Online
                              </p>
                            </div>
                            {/* loai cong viec  */}
                            <p className="text-gray-500">
                              {item.tenLoaiCongViec}
                            </p>

                            {/* đánh giá  */}
                            <div className="flex space-x-2 items-center">
                              <i className="fa-solid fa-star text-black "></i>
                              <span className="font-semibold">
                                {item.congViec.saoCongViec}
                              </span>
                              <span className="text-gray-400 ">
                                (
                                <span className="underline">
                                  {item.congViec.danhGia}
                                </span>
                                )
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="rounded-lg py-2 px-6 my-3 border border-black hover:bg-black hover:text-white transition-all duration-300 ">
                          Contact me
                        </button>
                      </div>
                      {/* FAQ  */}
                      <div className="faq my-16">
                        <div className="faq-title mb-8">
                          <h2 className="text-3xl font-semibold">FAQ</h2>
                        </div>
                        <Collapse
                          expandIconPosition="end"
                          defaultActiveKey={["1"]}
                          ghost
                          items={itemsCollapse}
                        />
                      </div>

                      {/* bảng đánh giá   */}
                      <ReviewBoard />
                      {/* reviewer  */}
                      <div className="reviewer my-12">
                        {/* search  */}
                        <form className="reviewer_search  border rounded-lg w-5/12 flex items-center   ">
                          <input
                            className="w-5/6 p-3 "
                            type="text"
                            placeholder="Search reviews"
                          />
                          <button className="bg-black  text-white rounded-r-lg py-3 px-2    w-1/5">
                            <i className="fa-solid fa-magnifying-glass "></i>
                          </button>
                        </form>
                        {/* filter  */}
                        <div className="reviewer_filter flex space-x-3 mt-4 ">
                          <h4>Sort by </h4>
                          <Dropdown
                            overlayStyle={{ color: "red" }}
                            menu={{
                              items,
                            }}
                            trigger={["click"]}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                Most relevant
                                <DownOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </div>
                        {/* comment  */}
                        <div className="reviewer_comment ">
                          {comment.map((item, index) => {
                            return <CommentDetail item={item} />;
                          })}
                        </div>
                      </div>

                      {/* user comment  */}
                      <div className="user-comment mt-5 flex space-x-5 w-full">
                        <img
                          className="w-16 h-16"
                          src={
                            user
                              ? user.user.avatar
                                ? user.user.avatar
                                : avatarDefault
                              : avatarDefault
                          }
                          alt=""
                        />
                        {/* <p className="w-1/6">{user.user.name}</p> */}
                        <form className="w-5/6" action="">
                          <textarea
                            onChange={(event) => {
                              setCommentUser({
                                ...commentUser,
                                noiDung: event.target.value,
                              });
                            }}
                            className="border w-full h-48"
                            name="noiDung"
                            id=""
                          ></textarea>
                          <button
                            onClick={(evet) => {
                              if (!commentUser.noiDung) {
                                handleNotification(
                                  "Vui lòng nhập bình luận trước khi gửi",
                                  "error"
                                );
                              } else {
                                binhLuanService
                                  .guiBinhLuan(
                                    user ? user.token : "",
                                    commentUser
                                  )
                                  .then((res) => {
                                    console.log(res);
                                    handleNotification(
                                      res.data.message,
                                      "success"
                                    );
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    handleNotification(
                                      "Thêm mới thất bại",
                                      "error"
                                    );
                                  });
                              }
                            }}
                            type="button"
                            className="bg-black rounded-md text-white font-semibold p-3"
                          >
                            Add Comment
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* Cột bên phải  */}
                    <div className=" max-lg:order-1 max-lg:w-full max-lg:static w-2/5 sticky top-16 detail-content-right border border-gray-300 flex items-center justify-center h-full bg-gray-100">
                      <div className="w-full bg-white rounded-lg shadow-lg">
                        <div className="flex">
                          <button
                            className=" w-1/3 py-2   text-center font-bold bg-gray-200 hover:bg-gray-300 active"
                            onClick={(event) => {
                              switchTab(event, "basic");
                            }}
                          >
                            Basic
                          </button>

                          <button
                            className="w-1/3 py-2 text-center    font-bold bg-gray-200 hover:bg-gray-300"
                            onClick={(event) => {
                              switchTab(event, "standard");
                            }}
                          >
                            Standard
                          </button>
                          <button
                            className="w-1/3 py-2 text-center font-bold bg-gray-200 hover:bg-gray-300"
                            onClick={(event) => {
                              switchTab(event, "premium");
                            }}
                          >
                            Premium
                          </button>
                        </div>
                        {/* Basic Package */}
                        <div id="basic" className="p-5">
                          <PackageDetail item={item} />
                        </div>
                        {/* Standard Package */}
                        <div id="standard" className="p-5 hidden">
                          <div className="text-2xl font-bold mb-2">US$50</div>
                          <p>Standard package details</p>
                          {/* Add content here */}
                          <ButtonPackage />
                        </div>
                        {/* Premium Package */}
                        <div id="premium" className="p-5 hidden">
                          <div className="text-2xl font-bold mb-2">US$100</div>
                          <p>Premium package details</p>
                          {/* Add content here */}
                          <ButtonPackage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return <div>{renderDetailJob()}</div>;
};

export default DetailPage;
