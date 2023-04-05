import './styles/global.css'

import AuthContext from "./components/AuthContext"
import Layout from "./components/layout"
import getBrandsData from "./lib/getBrandsData"
import getCategoryData from "./lib/getCategoryData"
import getSessionData from "./lib/getSessionData"
import { headers } from 'next/headers';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}




export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageData = getCategoryData()
  const data = await pageData

  const brandsData = getBrandsData()
  const brands_data = await brandsData

  const session = await getSessionData(headers().get('cookie') ?? '')

  // console.log(session.token);

  return (
    <html lang="en" dir='rtl'>
      <body>
        <AuthContext>
          <Layout data={data} brands_data={brands_data} sessionServ={session} >
            {children}
          </Layout>
        </AuthContext>
      </body>
    </html >
  )
}
