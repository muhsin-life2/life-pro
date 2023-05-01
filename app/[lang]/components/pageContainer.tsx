import "server-only"
import PageStructure from "./page-structure"
import Products from "./products"
const PageContainer = ({ data, lang }) => {

    return (
        <PageStructure data={data} lang={lang}>
            { /* @ts-expect-error Async Server Component */}
            <Products lang={lang} slug={data.section_data_object?.slug} type_key={data.section_data_object?.type_key} />
        </PageStructure>
    )
}

export default PageContainer