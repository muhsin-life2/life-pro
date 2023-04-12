"use client"
import DynamicSliderGrid from "./dynamic-slider-grid";
import DynamicGrid from "./dynamic-grid";
import { useState, useEffect, Suspense } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "./products";
import getProductsData from "../lib/getProductsData";


// const fetcher = (...args) => fetch(...args).then(res => res.json())
const PageStructure = ({ data, lang }) => {

    const [domLoaded, setDomLoaded] = useState(false);
    const [width, height] = useWindowSize();
    const [proDatas, setProData] = useState(null);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    // function getProductsDatas(catName) {
    //     getProductsData(lang, catName).then(res => setProData(res.data.products)
    //      )

    //     return proDatas
    // }
    return (
        domLoaded ?
            data.map(data =>
                <div className="max-w-[1450px] mx-auto px-[10px]">
                    {domLoaded &&
                        data.section_type === "dynamic_slider_grid" ?

                        width <= 565 ?
                            <DynamicSliderGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                            :
                            <DynamicSliderGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                        : ""
                    }
                    {domLoaded &&

                        data.section_type === "dynamic_grid" ?
                        width <= 565 ?
                            <DynamicGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                            : <DynamicGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                        : ""
                    }
                    {domLoaded &&
                        data.section_type === "product_grid" ?
                        <>
                            <h4 className="md:text-xl text-sm text-center my-5 font-bold">{data.section_title}</h4>

                            <Products data={data.section_data_object.slug} isProductsPage={false} lang={lang} type_key={data.section_data_object.type_key}/>

                        </>
                        : ""
                    }
                </div>
            )
            : 
            <div className="max-w-[1450px] mx-auto">
              <a className="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after card translate-3d-none-after rounded ">
              <div className="relative  text-primary-500 pt-[30rem]" >
                <div className="absolute top-0 left-0 h-full w-full "><span className="skeleton-box  block h-full"></span></div></div>
            
                <div className="py-2  text-left relative flex-grow">
                  <div
                      className="flex justify-between space-x-5 py-5">
                      <span className="skeleton-box h-52 w-1/5 inline-block rounded-xl"></span>
                      <span className="skeleton-box h-52 w-1/5 inline-block rounded-xl"></span>
                      <span className="skeleton-box h-52 w-1/5 inline-block rounded-xl"></span>
                      <span className="skeleton-box h-52 w-1/5 inline-block rounded-xl"></span>
                      <span className="skeleton-box h-52 w-1/5 inline-block rounded-xl"></span>

                  </div>
                </div>   
                     <div className="  text-left relative flex-grow">
                  <div
                      className="flex justify-between space-x-2">
                      <span className="skeleton-box h-36 w-1/2 inline-block rounded-xl"></span>
                    <span className="skeleton-box h-36 w-1/2 inline-block rounded-xl"></span>
                
                  </div>
                </div> 
            
            </a>
            </div>



    )
}

export default PageStructure;