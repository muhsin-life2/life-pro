import Layout from "components/layout";
import DynamicSliderGrid from "components/dynamic-slider-grid"
import DynamicGrid from "components/dynamic-grid";
import { useState, useEffect } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "components/products";
import generateData from "@/lib/generateData";
import { useRouter } from "next/router";
const SinglePageContent = ({ data, brands_data, hp_data, pro_data }) => {
    const router = useRouter();
    const { slug } = router.query;
    const [domLoaded, setDomLoaded] = useState(false);
    const [pageData, setpageData] = useState(null);
    const [width, height] = useWindowSize();

    useEffect(() => {
        setDomLoaded(true);
        debugger
        const fetchProduct = async () => {
            const response = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${slug}`);
            const data = await response.json();
            setpageData(data.data.content)
        };
        if (slug) {
            fetchProduct();
        }
    }, [slug]);

    if (!slug) {
        return <div>Loading...</div>;
    }

    // function slugDatas(data) {
    //     debugger
    //     generateData(data).then((res) => {
    //         setpageData(res.data.content)
    //     })
    // }
    return (

        <>


            {pageData ?
                pageData.map(data =>
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
            }
        </>

    )

}
export default SinglePageContent;

// export async function getStaticPaths() {
//     const res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home")
//     const data = await res.json();
//     const home_page_data = data.data.content;
//     // var allPaths = null
//     const allPaths = home_page_data.filter(contObj => (contObj.section_type === "dynamic_grid" || "dynamic_slider_grid") && contObj.section_data_array && contObj.section_data_array.length != 0
//     ).filter(contObj => contObj.section_data_array.some(secDataArray => secDataArray.slug != null))

//     var slugs = []
//     allPaths.map(secData =>
//         secData.section_data_array.map(secDataArray => (
//             secDataArray.slug != null &&
//             slugs.push(secDataArray.slug)
//         ))
//     )
//     var filt_paths = [...new Set(slugs)]

//     const paths = filt_paths.map(slug => {
//         return {
//             params: {
//                 home: slug.toString()
//             },
//         };
//     })

//     return {
//         paths: [],
//         fallback: false,
//     }
// }

// export async function getStaticProps(context) {
//     // const id = context?.params.home

//     // const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
//     // const data = await res.json();

//     // const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
//     // const brands_data = await brands_res.json();

//     // // const home_page_res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${id}`);
//     // // if (!home_page_res.ok) {
//     // //     return {
//     // //         notFound: true
//     // //     }
//     // // }
//     // // const hp_res = await home_page_res.json()
//     // // const hp_data = hp_res.data.content;

//     // // console.log(hp_data)


//     // const pro_res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
//     // const pro_data_res = await pro_res.json();
//     // const pro_data = pro_data_res.data.products;


//     // // console.log(hp_data);

//     // // const data = pro_data.data.products;

//     return {
//         props: {
//             // data,
//             // brands_data,
//             // pro_data
//         }
//     }
// }
