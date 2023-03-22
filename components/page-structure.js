import DynamicSliderGrid from "components/dynamic-slider-grid"
import DynamicGrid from "components/dynamic-grid";
import { useState, useEffect } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "./products";

const PageStructure = ({ data, pro_data }) => {

    const [domLoaded, setDomLoaded] = useState(false);
    const [width, height] = useWindowSize();

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        data ?
            data.map(data =>
                <div class="max-w-[1440px] mx-auto">
                    {domLoaded &&
                        data.section_type === "dynamic_slider_grid" ?

                        width <= 565 ?
                            <DynamicSliderGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                            :
                            <DynamicSliderGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                        : ""
                    }

                    {
                        domLoaded &&
                            data.section_type === "dynamic_grid" ?
                            width <= 565 ?
                                <DynamicGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                                : <DynamicGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                            : ""
                    }
                    {domLoaded &&
                        data.section_type === "product_grid" ?
                        <>
                            <h4 class="md:text-xl text-sm text-center my-5 font-bold">{data.section_title}</h4>
                            <Products data={pro_data} /></>

                        : ""
                    }
                </div>
            )
            : <div class="animate-pulse">
                <div role="status" class="flex items-center justify-center h-56  bg-gray-300 rounded-lg  dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="grid grid-flow-col space-x-4 my-3">
                    <div role="status" class="flex items-center justify-center w h-32 m bg-gray-300 rounded-lg  dark:bg-gray-700">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex items-center justify-center  h-32 m bg-gray-300 rounded-lg  dark:bg-gray-700">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex items-center justify-center h-32 m bg-gray-300 rounded-lg  dark:bg-gray-700">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="grid grid-flow-col space-x-4 my-3">
                    <div role="status" class="flex items-center justify-center w h-32 m bg-gray-300 rounded-lg  dark:bg-gray-700">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex items-center justify-center  h-32 m bg-gray-300 rounded-lg  dark:bg-gray-700">
                        <span class="sr-only">Loading...</span>
                    </div>

                </div>
                <div role="status" class="flex items-center justify-center h-56  bg-gray-300 rounded-lg  dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>

            </div>


    )
}

export default PageStructure;