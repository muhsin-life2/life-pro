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
        data ?
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
            : <div className="animate-pulse px-[10px] py-1 max-w-[1450px] mx-auto">
                <div role="status" className="flex h-96 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="my-3 grid grid-flow-col space-x-4">
                    <div role="status" className="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className="my-3 grid grid-flow-col space-x-4">
                    <div role="status" className="w m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div role="status" className="flex h-56 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>



    )
}

export default PageStructure;