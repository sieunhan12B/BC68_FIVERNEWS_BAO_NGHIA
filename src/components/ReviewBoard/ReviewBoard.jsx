import React from "react";

const ReviewBoard = () => {
  return (
    <>
      {/* bảng đánh giá  */}
      <div className="review">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold">Reviews</h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold">5.0</span>
              <div className="ml-2">
                {[...Array(5)].map((_, i) => (
                  <span>★</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">2,561 reviews for this Gig</p>
          </div>
          <div className="space-y-2">
            {[
              { stars: 5, count: 2480 },
              { stars: 4, count: 63 },
              { stars: 3, count: 9 },
              { stars: 2, count: 5 },
              { stars: 1, count: 4 },
            ].map((item, index) => (
              <div className="flex items-center">
                <span className="w-16">{item.stars} Stars</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full mx-2">
                  <div
                    className="h-4 bg-black rounded-full"
                    style={{
                      width: `${(item.count / 2561) * 100}%`,
                    }}
                  ></div>
                </div>
                <span>({item.count})</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[
              {
                label: "Seller communication level",
                score: 4.9,
              },
              { label: "Recommend to a friend", score: 4.9 },
              { label: "Service as described", score: 5.0 },
            ].map((item, index) => (
              <div className="flex justify-between items-center">
                <span>{item.label}</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold">{item.score}</span>
                  <div className="ml-2 ">
                    {[...Array(5)].map((_, i) => (
                      <span>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewBoard;
