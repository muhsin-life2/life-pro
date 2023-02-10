import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children , data, brands_data}) {
    return (
      <>
        <Navbar data={data} brands_data={brands_data}/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }

  
