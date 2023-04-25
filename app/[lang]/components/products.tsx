'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { usePathname } from 'next/navigation';
import getProductsData from "../lib/getProductsData";
import { useState, useEffect } from 'react'
import { SingleProductData } from "./single-product-data";
import { ProductsSkeleton } from "./productsSkeleton";
const Products = ({ data, isProductsPage, lang, type_key }) => {
    // md:pt-[170px] pt-[200px] px-[100px]
   

    const skeletonArray = Array(6).fill(<ProductsSkeleton/>)

    function reviewColor(rating) {
        if (rating == 0) {
            return "gray"
        }
        else {
            return "orange"
        }
    }
    const [proDatas, setProData] = useState([
        {
            slug: "",
            rating: "",
            title: "",
            images: {
                featured_image: ""
            },
            price: "",
            categories: [
                {
                    name: ""

                }
            ],
            offers: {
                is_special: ""
            }
        }

    ]);

    useEffect(() => {
        getProductsData(lang, data, type_key).then(res => setProData(res.data.products))

    },
        []);




    return (
        <>
            <div className="">

                {isProductsPage ?
                    <div className="py-5 w-full">
                        <h1 className="text-4xl text-center p-10 text-blue-400 font-semibold">Products</h1>
                        <div className="text-center text-blue-500 text-2xl"></div>
                    </div> : ""}
                <div>
                    {isProductsPage ?
                        <div className="flex justify-between text-gray-400 ml-5 mb-5">
                            <p>Showing results {data.length} of {data.length}</p>
                        </div> : ""}
                    <Swiper
                        className="my-7"
                        slidesPerView={2}
                        modules={[Autoplay]}
                        breakpoints={{
                            // when window width is >= 640px
                            1024: {
                                width: 1024,
                                slidesPerView: 4,
                            },
                            // when window width is >= 768px
                            520: {
                                width: 520,
                                slidesPerView: 3
                            },
                        }}

                    >
                        {proDatas.length > 1? proDatas.map(pro_data => (
                            <SwiperSlide className="cursor-grab w-full mr-5">
                                <SingleProductData pro_data={pro_data}/>
                            </SwiperSlide>
                        )) :
                            <div className="flex overflow-x-auto no-scrollbar">
                                {
                                    skeletonArray.map(sk => (
                                        sk
                                    ))
                                }

                            </div>
                        }
                    </Swiper>

                </div>


            </div>
        </>
    )
}

export default Products;