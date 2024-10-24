"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProducts } from "@/data/products";
import Autoplay from "embla-carousel-autoplay";
import React, { useState } from "react";
import { videos } from "../../../data/videos";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { giftBoxs } from "@/data/gift-boxs";

export default function ProductDetail({ params }) {
  const product = getProducts(parseInt(params.id));
  const [amount, setAmount] = useState(1);
  const [selectBox, setSelectBox] = useState(null);
  const [itemVideo, setVideo] = useState(null);
  console.log({ product });

  return (
    <section className="grid grid-cols-12 py-10">
      <div className="col-span-5 pb-9">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {product.img.map((item) => (
              <CarouselItem>
                <div className="overflow-hidden h-[500px] rounded-3xl">
                  <img src={item} className=""></img>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex flex-wrap gap-2 mt-3">
          {product.img.map((item) => (
            <Card className="w-28 overflow-hidden h-28">
              <CardContent className="p-0">
                <img src={item} className="w-full"></img>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="col-span-6 col-start-7 flex flex-col gap-8">
        <p className="text-2xl font-bold">{product.name}</p>
        <p className="text-2xl font-bold text-red-800">{product.cost}</p>
        <div className="w-full">
          <p className="font-semibold">chọn hộp quà:</p>
          <div className="w-full flex flex-wrap gap-3 mt-3">
            {giftBoxs.map((giftBox) => (
              <div
                className={
                  "flex w-fit px-5 py-3 border border-gray-400 rounded-md " +
                  (giftBox === selectBox ? "bg-blue-200/50" : "")
                }
                onClick={() => setSelectBox(giftBox)}
              >
                <img className="w-5 h-5" src={giftBox.image} />
                <p className="text-xs ml-3">{giftBox.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-semibold">chọn video:</p>
          <div className="flex ">
            <ScrollArea>
              <div className="flex">
                {videos.map((video) => (
                  <div
                    className={
                      "mr-4 py-5" +
                      (video === itemVideo ? " bg-pink-200/40" : "")
                    }
                  >
                    <iframe
                      src={video.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <button
                      className="font-semibold"
                      onClick={() => setVideo(video)}
                    >
                      {video.title}
                    </button>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="font-semibold text-gray-400">Số lượng:</p>
          <div class="h-[40px] rounded-[20px] px-6 py-2 text-[15px] flex justify-center items-center gap-3 border border-solid border-[#C2C2C2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="4"
              fill="none"
              class="cursor-not-allowed"
              onClick={() => {
                if (amount > 1) {
                  setAmount(amount - 1);
                }
              }}
            >
              <path fill="#2F4157" d="M16 3.14H0V.86h16z"></path>
            </svg>
            {amount}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              class="cursor-pointer"
              onClick={() => setAmount(amount + 1)}
            >
              <path
                fill="#2F4157"
                d="M16 9.14H9.123V16H6.86V9.14H0V6.86h6.86V0h2.263v6.86H16z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-red-200 px-4 py-3 rounded-full border-red-700 font-semibold border">
            Thêm vào giỏ hàng
          </button>
          <button className="min-w-36 bg-red-700 text-white font-semibold px-4 py-3 rounded-full border-red-700 border">
            Mua ngay
          </button>
        </div>
      </div>
      <div className="col-span-12 mt-10">
        <div className="bg-gray-300 rounded-xl p-10 flex flex-col gap-3">
          <p className="text-lg font-semibold">Mô tả sản phẩm:</p>
          <p className="ml-10 text-sm">
            FOXOMA BOX được tạo ra để mang đến cho bạn và người thân yêu những
            giây phút thư giãn, tận hưởng những điều tuyệt vời từ thiên nhiên và
            cuộc sống. Với đai chườm bụng FOX, bạn sẽ cảm nhận được sự chăm sóc
            nhẹ nhàng và hiệu quả cho cơ thể. Kẹo dâu tây L'ang Farm sẽ làm ngọt
            ngào thêm những khoảnh khắc vui vẻ, trong khi kem dưỡng da tay
            Cocoaimee giúp làn da luôn mềm mại, mịn màng. Sáp thơm Aroma sẽ mang
            đến một không gian sống tươi mới, dễ chịu. Tất cả đều được gói gọn
            trong hộp quà sang trọng, kèm túi đựng và thiệp chúc, biến set quà
            này thành một lựa chọn hoàn hảo cho bất kỳ dịp đặc biệt nào.
          </p>
          <p className="text-lg font-semibold text-red-700">Lưu ý:</p>
          <p className="ml-10 text-sm">
            hải luôn luôn đọc hướng dẫn sử dụng và liều lượng trước khi cho con
            uống bất kỳ loại thuốc gì. Phải nhớ, không bao giờ được cho trẻ uống
            quá liều lượng quy định hoặc uống theo liều của người lớn, bởi có
            thể nguy hại đến sức khỏe và tính mạng của trẻ. Nếu bạn chưa chắn
            chắn về loại thuốc định cho con sử dụng và chưa biết cho con uống
            thế nào là đúng thì hãy đến hỏi và xin lời khuyên của bác sĩ
          </p>
          <p className="text-lg font-semibold text-blue-600/65">
            Set quà đã chọn bao gồm:
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-fuchsia-600 mb-3">set quà</p>
              <img src={product.img[0]} className="rounded-3xl" />
            </div>
            {selectBox && (
              <div>
                <p className="font-semibold text-teal-600 mb-3">Hộp quà</p>
                <img src={selectBox.image} className="rounded-3xl" />
              </div>
            )}
            {itemVideo?.video && <div>
              <p className="font-semibold text-rose-400 mb-3">Video tặng kèm</p>
              <iframe
                      src={itemVideo.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                ></iframe>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
