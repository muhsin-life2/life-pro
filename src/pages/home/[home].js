import DynamicSliderGrid from "components/dynamic-slider-grid"
import DynamicGrid from "components/dynamic-grid";
import { useState, useEffect } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "components/products";
import generateData from "@/lib/generateData";
import { useRouter } from "next/router";
import Image from "next/image";
import PageStructure from "components/page-structure";

export default function SinglePageContent() {
    const router = useRouter()
    //apis
    const apiUrl = `https://prodapp.lifepharmacy.com/api/cms/page/${router.query.home}`

    //hooks
    const [pageData, setpageData] = useState(null);

    //onload
    useEffect(() => {
        if (!router.isReady) {
            return
        }

        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setpageData(res.data.content))

    }, [])

    return (
        <PageStructure data={pageData} />
    )
}

// export async function getStaticParams() {
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
//     console.log(filt_paths);

//     return filt_paths.map(slug => {
//         return {
//             home: slug.toString()
//         };
//     })

//     // return {
//     //     paths: [],
//     //     fallback: false,
//     // }
// }

//  async function getData({ params }) {
//     console.log(params);
//     const id = params.home
//     // const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
//     // const data = await res.json();

//     // const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
//     // const brands_data = await brands_res.json();

//     const home_page_res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${id}`);
//     if (!home_page_res.ok) {
//         return {
//             notFound: true
//         }
//     }
//     const hp_res = await home_page_res.json()
//     const hp_data = hp_res.data.content;

//     // // console.log(hp_data)


//     // const pro_res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
//     // const pro_data_res = await pro_res.json();
//     // const pro_data = pro_data_res.data.products;


//     // // console.log(hp_data);

//     // // const data = pro_data.data.products;

//     return {
//         hp_data
//     }
// }
export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}
