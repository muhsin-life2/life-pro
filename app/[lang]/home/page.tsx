import PageStructure from '../components/page-structure'
import getHomePageData from '../lib/getHomePageData'
import PageContainer from '../components/pageContainer'
import Products from '../components/products'


export default async function UsersPage({ params }) {
    const data_res = await getHomePageData(params.lang)

    // const pro_data_res = await getProductsData(params.lang)
    // const pro_data = await pro_data_res

    return (
        <div className='max-w-[1450px] px-[10px] mx-auto'>
            {data_res.data.content.map(data => (
                <PageContainer data={data} lang={params.lang} />
            ))}
        </div>
    )
}
