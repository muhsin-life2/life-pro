import PageStructure from "components/page-structure";
import Layout from "components/layout";
export default function Home({ data, brands_data, home_page_data, pro_data }) {

    return (
        <Layout data={data} brands_data={brands_data}>
            <PageStructure data={home_page_data} pro_data={pro_data}/>
        </Layout>
    )

}



export async function getServerSideProps() {

    const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
    const data = await res.json();

    const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
    const brands_data = await brands_res.json();

    const home_page_res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home");
    const hp_data = await home_page_res.json();
    const home_page_data = hp_data.data.content;
    // const data = pro_data.data.products;

    const pro_res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const pro_data_res = await pro_res.json();
    const pro_data = pro_data_res.data.products;


    return {
        props: {
            data,
            brands_data,
            home_page_data,
            pro_data
        }
    }
}
