import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const DynamicGrid = ({ data, isDesktop, isMobile }) => {
    const [gridData, setGridData] = useState(data);
    const fetchPageData = async (slug) => {
        debugger
        const res = await fetch(`${process.env.API_END_POINT}` + slug)
        if (res.ok) {
            setGridData(res.json())
        }
    }
    if (isDesktop === false && isMobile === false) {
        return <></>
    }

    return <div
        className={((isDesktop ? (gridData.section_title === "Main category" || gridData.section_title === "high" || gridData.section_title === "top categories" || gridData.section_title === "sunshine" || gridData.section_title === "brands" || gridData.section_title === "Money Saver" || gridData.section_title === "skin care" || gridData.section_title === "Everything Flat 30%" || gridData.section_title === "2+1 title" || gridData.section_title === "sports" || gridData.section_title === "trending now-title") ? "grid-flow-col " : "" : "") + (isDesktop ? (gridData.settings.desktop.column > 1 ? ` grid-cols-${gridData.settings.desktop.column}` : "") : (gridData.settings.mobile.column > 1 ? ` grid-cols-${gridData.settings.mobile.column}` : "")) + (isDesktop ? (gridData.settings.desktop.row > 1 ? ` grid-rows-${gridData.settings.desktop.row}` : "") : (gridData.settings.mobile.row > 1 ? ` grid-rows-${gridData.settings.mobile.row}` : ""))) + " grid px-1"}>
        {gridData.section_data_array.map(sec_data => (
            ((isDesktop && sec_data.desktop.image_url) || isMobile && sec_data.mobile.image_url ?
                <Link href={`/home/${sec_data.slug}`} onclick={() => { fetchPageData(sec_data.slug) }}>
                    <Image src={isDesktop ? sec_data.desktop.image_url : sec_data.mobile.image_url} class="w-full h-full hover:grayscale-[50%] grayscale-0 transition-all duration-75"
                        height={isDesktop ? (sec_data.desktop.height ? sec_data.desktop.height : 30) : (sec_data.mobile.height ? sec_data.mobile.height : 30)}
                        width={isDesktop ? (sec_data.desktop.width ? sec_data.desktop.width : 390) : (sec_data.mobile.width ? sec_data.mobile.width : 390)} />
                </Link>
                : "")
        ))}
    </div>


}

export default DynamicGrid;