"use client"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children, data, brands_data, sessionServ, isArabic, lang, langData }) {

  function searchButtonOnLeave(e) {
    if (!e.target.parentNode.classList.contains("group-search")) {
      document.getElementsByClassName("lg-screen-searchsuggestion-lg")[0].classList.add("hidden");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.remove("rounded-t-xl");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.add("rounded-xl");
    }
  }
  return (
    <>
      <section onMouseDown={(e) => { searchButtonOnLeave(e) }}>
        <Navbar data={data} brands_data={brands_data} sessionServ={sessionServ} isArabic={isArabic} lang={lang} langData={langData}/>
        <main>{children}</main>
        <Footer langData={langData} />
      </section>
    </>
  )
}


