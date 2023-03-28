import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Suspense } from "react";

const DynamicGrid = ({ data, isDesktop, isMobile }) => {
    // const [data, setdata] = useState(data);
    const router = useRouter();

    if (isDesktop === false && isMobile === false) {
        return <></>
    }
    const handleClick = (slug) => {
        router.push(`/home/${slug}`)
    }
    return <div
        className={( (isDesktop ? (data.settings.desktop.column > 1 ? ` grid-cols-${data.settings.desktop.column}` : "") : (data.settings.mobile.column > 1 ? ` grid-cols-${data.settings.mobile.column}` : "")) + (isDesktop ? (data.settings.desktop.row > 1 ? ` grid-rows-${data.settings.desktop.row}` : " !grid-flow-col") : (data.settings.mobile.row > 1 ? ` grid-rows-${data.settings.mobile.row}` : ""))) + " grid"}>
        {data.section_data_array.map(sec_data => (
            ((isDesktop && sec_data.desktop.image_url) || isMobile && sec_data.mobile.image_url ?
                <Link href={`/home/${sec_data.slug}`} onClick={() => { handleClick(sec_data.slug) }}>
                    <Image src={isDesktop ? sec_data.desktop.image_url : sec_data.mobile.image_url} class=" hover:brightness-105 "
                        height={isDesktop ? (sec_data.desktop.height ? sec_data.desktop.height : 30) : (sec_data.mobile.height ? sec_data.mobile.height : 30)}
                        width={isDesktop ? (sec_data.desktop.width ? sec_data.desktop.width : 390) : (sec_data.mobile.width ? sec_data.mobile.width : 390)} />
                </Link>
                : "")
        ))}
    </div>


}

export default DynamicGrid;