import React from "react";
import vnImg from "./../../assets/img/vn.png";

const CommentDetail = (item) => {
  return (
    <>
      <div className="space-y-5 my-12">
        <div className="border rounded-xl p-5 space-y-4 ">
          <div className="reviewer_content_top">
            <div className="flex space-x-4 ">
              <img
                className="w-16 h-16 rounded-full"
                src={item.item.avatar}
                alt=""
              />
              <div className="">
                <h4>{item.item.tenNguoiBinhLuan}</h4>
                <div className="country flex space-x-2">
                  <img className="w-6 h-6" src={vnImg} alt="" />
                  <span>VietNam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="review_content_middle bg-gray-200  h-[1px]"></div>
          <div className="reviewer_content_bot text-center space-y-2">
            <div className="danh-gia-top  flex space-x-1 items-center  ">
              <div className="sao flex">
                <p>
                  {" "}
                  {[
                    ...Array(
                      item.item.saoBinhLuan > 5
                        ? (item.item.saoBinhLuan = 5)
                        : item.item.saoBinhLuan
                    ),
                  ].map((_, i) => (
                    <span>★</span>
                  ))}
                </p>
                {/* <i className="fa-solid fa-star text-black mt-1 "></i> */}
              </div>
              <div className="ngan-cach rounded-full h-1 w-1 bg-gray-200"></div>
              <div className="time flex space-x-2">
                <p> 10 weeks ago</p>
              </div>
            </div>
            <div className="danh-gia-middle text-left">
              <p className="">{item.item.noiDung}</p>
            </div>
            <div className="ngay-danh-gia text-left">
              <p className="text-gray-400 text-xs">{item.item.ngayBinhLuan}</p>
            </div>
          </div>
        </div>
        <div className="danh-gia-bot flex space-x-3 mx-4">
          <span className="font-semibold">Helpful?</span>
          <div className="like flex items-center space-x-1">
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Yes</span>
          </div>
          <div className="dislike items-center space-x-1">
            <i className="fa-regular fa-thumbs-down"></i>
            <span>No</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
