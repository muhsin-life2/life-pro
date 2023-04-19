"use client"
import Navbar from "./navbar"
import Footer from "./footer"

import { Toaster } from 'react-hot-toast'
import { useState } from "react"
import toast from 'react-hot-toast'

export default function Layout({ children, data, brands_data, sessionServ, isArabic, lang, langData }) {
const [languageChangeToastVisibility, setlanguageChangeToastVisibility] = useState(false)
  function searchButtonOnLeave(e) {
    if (!e.target.parentNode.classList.contains("group-search")) {
      document.getElementsByClassName("lg-screen-searchsuggestion-lg")[0].classList.add("hidden");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.remove("rounded-t-xl");
      (document.getElementById("lg-screen-search") as HTMLInputElement).classList.add("rounded-xl");
    }
  }
  function languageClickedToast(){
    setTimeout(() => {
    toast.success('Language Changed Successfully')
      
    }, 1000);
  }

  return (
    <>
      <Toaster />
      <section onMouseDown={(e) => { searchButtonOnLeave(e) }}>
        <Navbar data={data} brands_data={brands_data} sessionServ={sessionServ} isArabic={isArabic} lang={lang} langData={langData} languageClickedToast={languageClickedToast}/>
        <main>{children}</main>
        <Footer langData={langData} />
      </section>
    </>
  )
}


