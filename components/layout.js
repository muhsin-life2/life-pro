import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children , data, brands_data}) {
  function searchButtonOnLeave(e) {
    if (!e.target.parentNode.classList.contains("group-search")) {
      document.getElementsByClassName("lg-screen-searchsuggestion")[0].classList.add("hidden");
    }
  }
  
    return (
      <>
      <div onMouseDown={(e)=>{searchButtonOnLeave(e)}}>
      <Navbar data={data} brands_data={brands_data}/>
        <main>{children}</main>
        <Footer />
      </div>
      

      </>
    )
  }

  
