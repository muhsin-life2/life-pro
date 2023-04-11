import type { Metadata } from 'next'
import Link from "next/link"

import PageStructure from '../components/page-structure'
import getHomePageData from '../lib/getHomePageData'
import getProductsData from '../lib/getProductsData'
import getAllUsers from '../lib/getAllUsers'

import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage({ params }) {
    const data_res = await getHomePageData(params.lang)
    const data = await data_res

    // const pro_data_res = await getProductsData(params.lang)
    // const pro_data = await pro_data_res

    return (
        <>
            <PageStructure data={data.data.content} lang={params.lang} />
        </>
    )
}