import Layout from "components/layout";
import Products from "components/products"

export default function products({ data }) {
    return (
        <Products data={data} isProductsPage={true} />
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const pro_data = await res.json();
    const data = pro_data.data.products;

    return {
        props: {
            data
        }
    }
}

