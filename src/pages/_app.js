import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from 'components/layout'
import { getSession } from 'next-auth/react'
export default function App({ Component, pageProps: { session, ...pageProps }, data, brands_data, sessionServ }) {
  return (
    <SessionProvider session={session} >
      <Layout data={data} brands_data={brands_data} sessionServ={sessionServ}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>

  )
}


App.getInitialProps = async (context) => {
  const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
  const data = await res.json();

  const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
  const brands_data = await brands_res.json();
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
  return {
    data,
    brands_data,
    sessionServ: userAddrData.data.addresses,
  }
}