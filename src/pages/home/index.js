import PageStructure from "components/page-structure";
import Layout from "components/layout";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Home({ home_page_data, pro_data }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (home_page_data) {
            setTimeout(() => {
                setLoading(false);
            }, 900);
        }
    }, []);
    return (
        loading ?
            <div class="animate-pulse px-3 py-1 max-w-[1440px] mx-auto">
                <div role="status" class="flex h-96 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="my-3 grid grid-flow-col space-x-4">
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="my-3 grid grid-flow-col space-x-4">
                    <div role="status" class="w m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div role="status" class="flex h-56 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> :
            <PageStructure data={home_page_data} pro_data={pro_data} />

    )

}



export async function getServerSideProps(context) {
    const session = await getSession(context);

    var userAddrData = {
        data: {
            addresses: []
        }
    };
    if (session) {
        // console.log(session.token.token);
        // const userAddrheaders = { 'Authorization': `Bearer ${session.token.token}` };
        const userAddrheaderRes = await fetch('https://prodapp.lifepharmacy.com/api/user/addresses', {
            headers: {
                Authorization: `Bearer ${session.token.token}`
            }
        });
        userAddrData = await userAddrheaderRes.json();
        // console.log(userAddrData.data.addresses);
    }


    const home_page_res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home");
    const hp_data = await home_page_res.json();
    const home_page_data = hp_data.data.content;
    // const data = pro_data.data.products;

    const pro_res = await fetch("https://prodapp.lifepharmacy.com/api/web/products?order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=ae-en");
    const pro_data_res = await pro_res.json();
    const pro_data = pro_data_res.data.products;



    return {
        props: {

            home_page_data,
            pro_data,
            sessionServ: userAddrData.data.addresses,
        }
    }
}
