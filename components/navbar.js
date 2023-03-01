import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import 'flowbite'
const Navbar = ({ data, brands_data }) => {

  const [searchData, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   searchButtonOnMouseEnter("ff")
  // }, [])

  function getSearchResults(query) {


  }
  function LoadImages(imagesrc) {
    if (imagesrc.logo === null && imagesrc.banner === null) {
      return "/Images/loading-img.gif"
    }
    else if (imagesrc.logo === null) {
      return imagesrc.banner;
    }
    else {
      return imagesrc.logo;
    }

  }
  const [showElement, setShowElement] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [overlayVisible, setOverlay] = useState(false);

  var i = 1;

  function shopByCatOnMouseOver() {
    document.getElementById("BeautyCareele").classList.remove("hidden");
    document.getElementById("BeautyCarebtn").classList.add("text-blue-400", "border-l-4", "border-blue-500", "bg-blue-100");
    i = 1;
  }

  function ulListTrigger(e, itemName) {
    var elements = document.getElementsByClassName("list-elements")
    for (var ele of elements) {
      if (!ele.classList.contains("hidden")) {
        ele.classList.add("hidden");
      }
    }
    if (i === 1 && itemName == "BeautyCareele") {
      document.getElementById("BeautyCarebtn").classList.remove("text-blue-400", "border-l-4", "border-blue-500", "bg-blue-100");
    }
    if (i === 1 && itemName != "BeautyCareele") {
      document.getElementById("BeautyCareele").classList.add("hidden");
      document.getElementById("BeautyCarebtn").classList.remove("text-blue-400", "border-l-4", "border-blue-500", "bg-blue-100");
    }
    else {
      document.getElementById(itemName).classList.remove("hidden");
    }
    i++
  }

  // function ulListCollapse(e, itemName) {
  //   if (e.relatedTarget.classList != null && e.relatedTarget.offsetParent != null && !e.relatedTarget.offsetParent.classList.contains("hello") && !e.relatedTarget.classList.contains(itemName)) {

  //     document.getElementById(itemName).classList.add("hidden");
  //     e.target.classList.remove("bg-gray-300");
  //   }
  // }


  // function sectionsData(sectionsData, sectionHeaderName) {

  //   var limit = 4;
  //   var sec_name = sectionHeaderName.replace(/\s/g, '');
  //   var sctionData = sectionsData.map((d, i) => {
  //     if (i > limit) {
  //       return (<div className={"hover:text-blue-500 mb-3 hidden " + sec_name}><a href="#"> {d.name} </a></div>)
  //     }
  //     else {
  //       return (<div className="hover:text-blue-500 mb-3"><a href="#"> {d.name} </a></div>)
  //     }
  //   })
  //   if (sectionsData.length > 5) {
  //     sctionData.push(<button class="text-blue-500 sectionMoreButtons" id={sec_name} >More...</button>)
  //   }

  //   return sctionData;
  // }

  function searchButtonOnClick(e) {
    document.getElementsByClassName("lg-screen-searchsuggestion")[0].classList.remove("hidden");
    searchButtonOnMouseEnter("")
  }

  function searchButtonOnMouseEnter(query) {

    var myHeaders = new Headers();
    myHeaders.append("X-Algolia-API-Key", "c54c5f0fc2e6bd0c3b97cfa5b3580705");
    myHeaders.append("X-Algolia-Application-Id", "WHCXS2GWOG");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "requests": [
        {
          "indexName": "products",
          "params": "query=" + query
        },
        {
          "indexName": "products_query_suggestions",
          "params": "query=" + query
        }
      ],
      "strategy": "none"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = fetch("https://WHCXS2GWOG-dsn.algolia.net/1/indexes/*/queries", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error while fetching search data', error));

  }

  return (
    <>

      <div class=" mx-auto">
        <div className="sticky top-0 z-50 bg-white mx-auto">
          <div class="grid grid-flow-col  bg-pink-800 text-white text-xs px-4 py-2 md:hidden ">
            <a href="#" class="flex justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7 mr-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div class="my-auto text-lg">Highest Rated Pharmacy App in UAE </div>
            </a>

            <div class="text-end text-lg">Download</div>
          </div>
          <div className="flex md:bg-indigo-900 bg-white p-4 px-8 gap-5 ">

            <Image src="https://www.lifepharmacy.com/images/logo-white.svg" alt=""
              className=" bg-indigo-900 filter md:flex hidden" width={280} height={250} />
            <Image class="mr-auto w-7  lg:hidden md:hidden" src="https://www.lifepharmacy.com/images/life.svg" alt="" width={100} height={100} />

            <form className="flex items-center w-full ">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <div class="relative group-search" onMouseDown={() => { searchButtonOnClick() }} onInput={(e) => { searchButtonOnMouseEnter(e.target.value) }}  >
                  < input type="text" id="simple-search"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                    placeholder="Search for Products..." required />


                  <div class=" shadow-xl py-1 px-3 lg-screen-searchsuggestion scale-100 hidden absolute top-12 border border-[2px] border-gray-200 right-0 left-0  bg-white border border-black border-gray-200 overflow-auto search-suggestion-height rounded-t-0 rounded-b-md ">
                    {searchData ?
                      <>
                        <div class="mb-5 group-search">
                          <h5 class="text-sky-500 text-xs ">SUGGESTIONS</h5>
                          <div class="flex my-2 flex-wrap text-[13px] text-gray-700 group-search">
                            {searchData.results[1].hits[0] ? searchData.results[1].hits.map(sug_data => (
                              <a href="#" class="rounded-xl bg-gray-200 hover:bg-gray-300  py-1 px-3 mb-2 mr-2">{sug_data.query}</a>
                            )) : <div><i >Nothing Match Your Searching...</i></div>}
                          </div>
                        </div>
                        <div class="text-gray-600 text-xs group-search">
                          <h5 class="text-sky-500 text-xs ">PRODUCTS</h5>
                          {searchData.results[0].hits[0] ? searchData.results[0].hits.map(pro_data => (
                            <a href="#" class="flex mt-2 group-search hover:bg-gray-100">
                              <Image placeholder="blur" blurDataURL="https://www.lifepharmacy.com/images/default-product-image.png" src={pro_data.images.featured_image} height={40} width={40}></Image>
                              <p class="ml-1  my-auto">{pro_data.title} </p>
                            </a>
                          )) : <div>No Products Found</div>}
                        </div>
                      </> : <Image class="w-1/2 mx-auto" src={"https://www.lifepharmacy.com/images/default-product-image.png"} height={300} width={300}></Image>}
                  </div>

                </div>
              </div>
            </form>

            <div className="grid grid-flow-col w-100 gap-5 md:flex lg:flex my-auto">
              <a href="#" class=" flex flex-col md:flex lg:flex">
                <Image src="https://www.lifepharmacy.com/images/svg/flag-ae.svg" alt=""
                  class=" rounded-lg mb-1 my-auto w-8 h-8" width={100} height={100} />
                <div class="text-[11px] text-center md:text-white">Arabic</div>
              </a>
              <a href="#" class="flex flex-col md:hidden lg:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className=" my-auto text-white w-8 h-8 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div class="text-[11px] text-center text-white">Account</div>

              </a>
              <a href="#" class="flex flex-col md:hidden lg:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="my-auto  text-white w-8 h-8 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div class="text-[11px] text-center text-white">Cart</div>

              </a>
              <a href="#" class="flex flex-col md:hidden lg:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="my-auto  text-white w-8 h-8 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <div class="text-[11px] text-center text-white">WishList</div>

              </a>


            </div>
          </div>
          <div className="grid grid-cols-2 py-1 px-8 bg-pink-700 text-white text-sm lg:flex md:flex hidden md:text-sm" >
            <div className=""> Highest Rated Pharmacy App in UAE | Rating | Download </div>
            <div className="text-end ml-auto"> <span className="font-bold">DELIVER TO:</span> Business Bay, Dubai
              <button onClick={() => setIsOpen(true)} className="bg-white text-black rounded text-xs px-3 ml-3 py-1">CHANGE</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4  hidden lg:flex md:flex ">
            <div onMouseOver={() => setOverlay(true)} onMouseLeave={() => { setOverlay(false) }} className="group inline-block shop-by-cat">
              <button href="#"
                onMouseOver={() => shopByCatOnMouseOver()} className="group-hover:bg-blue-500 py-1  group-hover:text-white hover:text-white transition-color duration-500 dropdown BeautyCareele"
                id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-6 h-6 my-2 float-left ml-3">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className="text-start mt-2 float-left mr-10 text-sm group-1 ml-2">Shop by Category</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="h-6 float-right mt-2 w-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div class="flex justify-start absolute bg-white  scale-0 group-hover:scale-100 left-0 right-0">
                <div class="z-50 border border-r-2 bg-white ">
                  <ul className="text-sm text-gray-700 dark:text-gray-700 rounded-sm transform scale-0 group-hover:scale-100  
              transition duration-100 ease-in-out origin-top bg-white w-[233px] h-full flex flex-wrap " id="catgories-element">
                    {data.data.map((item, i) => (
                      <li key="{item.name}" onMouseOver={(e) => { ulListTrigger(e, (item.name + "ele").replace(/\s/g, '')) }} class={"group-btn w-full list" + i}> <button href="#" id={(item.name + "btn").replace(/\s/g, '')} className="single-btn w-full py-3  pl-5 text-left flex "> <span className="flex-1 mr-3">  {item.name}   </span> <span className="mr-auto my-auto"> <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> </span> </button>
                      </li>
                    ))}
                  </ul>
                </div>


                <div class="bg-white shadow-lg transform scale-0 group-hover:scale-100  
              z-10 transition duration-150 ease-in-out origin-top   text-black  overflow-auto h-[30rem] shadow-2xl w-full hello">
                  {data.data.map((item) => (
                    <div class="w-full hidden list-elements" id={(item.name + "ele").replace(/\s/g, '')} >
                      <ul className={"right-0 u-list bg-white rounded-sm top-0 hover-menu  h-[35rem] ul-list-hover w-full " + (item.name + "ele").replace(/\s/g, '')} onMouseOver={() => { document.getElementById((item.name + "btn").replace(/\s/g, '')).classList.add("text-blue-500", "border-l-4", "border-blue-500", "bg-blue-100") }} onMouseLeave={() => { document.getElementById((item.name + "btn").replace(/\s/g, '')).classList.remove("text-blue-500", "border-l-4", "border-blue-500", "bg-blue-100") }}>

                        <li key="" className="">

                          <div class=" mb-9 ">
                            {/* md:overflow-x-auto  lg:overflow-x-hidden */}
                            {/* <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/oSAAmrmBrk28dsXmz1x2NxyCtjO5ssiMGd2kSuBY.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/oSAAmrmBrk28dsXmz1x2NxyCtjO5ssiMGd2kSuBY.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/kBb6QwEJ3EijbiKLgP6nBu6shHXookDgzd0kWobK.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/Pr5xkUPDWF9w1LvP8Lpjqts3FGKgbwEs1pB94oIH.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/xbWt2mDVv6UdKI0mRxsbVLMDE6NnGKjyGbyPicw7.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/EFP5KJ4ZFFtzW650y3HYJHerVKim5ZBJbqmhvYNK.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/DXDcd2fJTGAlpwjiCyBk1z1l98DXvy8fg9smG0YJ.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/nJ2riSxV0uGQB4mYxRfuEjGTu7TRRX04qnJoSvCV.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/Oxnah4FjrkEosMI5b8XtuI2Z9uzqcrYVyj2tEWLA.png?format=webp&quality=85" width="9%" height="20%" class="rounded-2xl md:w-1/6 lg:w-[5rem] xl:w-[8rem]" />
 */}
                            {/* <Image src={item.images.banner} width={700} height={700} className="w-1/2 mx-auto mb-16" placeholder="blur" blurDataURL="/Images/loading-img.gif" /> */}
                            <div class="flex justify-between  w-full md:flex-wrap lg:flex-nowrap">
                              <div class="  lg:order-none md:w-full">
                                <div id="accordion-collapse" data-accordion="collapse">
                                  {item.children.map(cat_data => (
                                    <div>
                                      <h2 id={(cat_data.name).replace(/\s/g, '')}>
                                        <button type="button" class=" flex items-center justify-between w-full px-3 py-2 font-medium text-left  border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-600 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 " data-accordion-target={("#" + cat_data.slug + "body").replace(/\s/g, '')} aria-expanded="true" aria-controls={(cat_data.slug + "body").replace(/\s/g, '')}>
                                          <span>{cat_data.name}</span>
                                          <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                      </h2>
                                      <div id={(cat_data.slug + "body").replace(/\s/g, '')} class="hidden transition-all duration-500 ease-in" aria-labelledby={(cat_data.slug).replace(/\s/g, '')}>
                                        <div class="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3   gap-y-5 py-2">{cat_data.sections.map(ch_data => (
                                          <a href="#" class=" flex mx-2  hover:bg-gray-50 rounded-xl">
                                            <Image className="  mx-0 " placeholder="blur" blurDataURL="https://www.lifepharmacy.com/images/default-product-image.png" src={LoadImages(ch_data.images)} height={50} width={50} />
                                            <p class="ml-3 text-left  text-[11px]  my-auto ">{ch_data.name}</p>
                                          </a>
                                        ))}</div>
                                      </div>
                                    </div>

                                  ))}
                                </div>
                              </div>
                              <div class="mx-auto md:w-full xl:w-full ">
                                <div class="font-bold lg:text-xl text-center mb-6">TOP BRANDS</div>
                                <div className="grid xl:grid-cols-4 md:grid-cols-4  lg:grid-cols-3  gap-x-0 gap-y-3 ">
                                  {brands_data.data.brands.map(bd => (
                                    <div class="">
                                      <Image class="mx-auto md:w-3/5 rounded-full border border-gray-200 border-2" width={150} height={150} src={bd.images.logo} alt="" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>                            {/* <div class="md:order-last  xl:order-first order-last md:w-full xl:w-fit">
                              <div className="grid xl:grid-cols-2 md:grid-cols-4 grid-cols-4 gap-x-3 gap-y-3 cat-elements">
                                {categoryChildrenData(item.children)}
                              </div>
                            </div> */}

                          {/* <div class="w-full xl:w-fit">
                              <div class="xl:grid xl:grid-cols-2 xl:gap-3 md:flex md:justify-center">
                                {item.children.slice(0, 6).map(ch => ch.sections.slice(0, 1).map(ch_d => (
                                  <div class="mr-2 my-6">
                                    <Image class="xl:w-full  mx-auto border border-orange-300 rounded-full border-4" width={120} height={120} src={ch_d.images.logo} alt="" />
                                  </div>
                                )
                                ))}
                              </div>
                            </div> */}
                          {/* <div class="flex justify-between mb-8 md:overflow-x-auto  lg:overflow-x-hidden ">
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/wKrhVokNa5xAvYMcytO6VYHqFXeCS2xYTEgdG6Wo.png?format=webp&quality=85" width="23%" height="30%" class="rounded-2xl h-23 mr-2 md:w-[17rem] lg:w-1/4" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/YEmBjxI1WX7Ru8Q6sqTZqoce9w7Sg6GWUnPmWvox.png?format=webp&quality=85" width="23%" height="30%" class="rounded-2xl h-23 mr-2 md:w-[17rem] lg:w-1/4" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/0zDwx4Jk2dRxRkfvkP5WUQg3145T9fcty9W8fX9D.jpg?format=webp&quality=85" width="23%" height="30%" class="rounded-2xl h-23 mr-2 md:w-[17rem] lg:w-1/4" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/images/0XOZfkxB4f3FtPxW6JOaVgTpGedzxeVj8UowQIDz.jpg?format=webp&quality=85" width="23%" height="30%" class="rounded-2xl h-23 mr-2 md:w-[17rem] lg:w-1/4" />
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-flow-col gap-3 hidden">
              <div className="group inline-block mr-2">
                <button href="#" className="hover:text-blue-500 ml-7 py-1" data-dropdown-toggle="dropdown2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-6 h-6 my-2 float-left mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  <div className=" text-start mt-2 float-left">Brands</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className=" h-6 float-left mt-2 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <ul
                  className="bg-white shadow-lg transform scale-0 group-hover:scale-100 absolute 
                z-10 transition duration-150 ease-in-out origin-top hidden group-hover:flex flex-col absolute left-0 px-5 py-0 text-black left-0 right-0 overflow-auto h-[30rem]">
                  <li>
                    <div className="grid grid-cols-5 gap-5" id="brands-section">
                      {brands_data.data.brands.map(bd => (
                        <div class="grid-flow-row mb-5"> <div class="flex flex-col mr-5">
                          <Image class="mx-auto rounded-full border border-white bg-white shadow-md" width={150} height={150} src={bd.images.logo} alt="" />
                          <h5 class="text-center mt-3">{bd.name} </h5>
                        </div></div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="group inline-block mr-2">
                <button href="#" className="hover:text-blue-500 mt-1 py-1 group"
                  data-dropdown-toggle="dropdown8">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="float-left mt-1 w-4 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>

                  <div className=" text-start mt-1 float-left">Offers</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className=" h-6 float-left mt-1 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>

                </button>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-700 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 bg-white z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-700 " aria-labelledby="dropdownDefaultButton">
                    <li>
                      <p className="block pr-20 pl-5 py-2 font-bold">Offer Details</p>
                    </li>
                    <li>
                      <a href="#" className="block pr-20 pl-5 py-2 hover:text-blue-400">Clearance
                        Sale</a>
                    </li>
                    <li>

                      <a href="#" className="block pr-20 pl-5 py-2 hover:text-blue-400">Sports
                        Nutrition</a>
                    </li>
                    <li>
                      <a href="#" className="block pr-20 pl-5 py-2  hover:text-blue-400">Preventive
                        Care</a>
                    </li>
                    <li>
                      <a href="#" className="block pr-20 pl-5 py-2 hover:text-blue-400">First
                        Aid</a>
                    </li>
                    <li>
                      <a href="#" className="block pr-20 pl-5 py-3 hover:text-blue-400">Sunshine
                        Nutrition</a>
                    </li>
                  </ul>
                </ul>
              </div>



              <button href="#" className="hover:text-blue-500 mb-3 py-1" data-dropdown-toggle="dropdown4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-6 h-6 my-2 float-left mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                </svg>

                <div className="text-start mt-2 float-left">Health Packages</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className=" h-6 float-left mt-2 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

            </div>

          </div>
        </div>


        <div class="sm:visible md:hidden ">

          {/* <div class="px-4 py-2 flex ">
            <Image class="mr-auto w-7" src="https://www.lifepharmacy.com/images/life.svg" alt="" width={100} height={100} />

            <form class="flex items-center w-3/4">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for Products..." required />
              </div>

            </form>
            <div class="ml-auto mt-auto">
              <Image src="https://www.lifepharmacy.com/images/svg/flag-ae.svg" alt=""
                class="bg-pink-700 my-auto rounded-lg w-fit" width={100} height={100} />
              <div class="text-sm">Arabic</div>
            </div>

          </div> */}
          <div class="grid grid-flow-col  bg-indigo-900 text-white text-xs px-4 py-2">
            <div>DELIVER TO: Business Bay, Dubai </div>
            <button class="bg-white rounded text-pink-700 w-20 ml-auto">CHANGE</button>
          </div>
        </div>
        {showElement ? (
          <div class="rounded-xl py-5 fixed bottom-28 inset-x-0 px-5 mx-5 border border-gray-300 flex justify-between md:text-xs bg-white sm:visible lg:w-6/12 lg:ml-auto bg-white z-20">
            <div class="text-indigo-900 font-bold text-xs">Add your location to get an accurate delivery time</div>
            <div class="flex justify-evenly">
              <button onClick={() => setIsOpen(true)} class="text-pink-900 font-semibold">Select your area</button>
              <svg class="w-5 mr-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <button onClick={() => setShowElement(!showElement)} aria-label="Close Show Element">
                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ) : null}

        {isOpen && (
          <div id="modal-new" className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50 top-1/2">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div class="relative w-full h-full max-w-lg min-w-sm mx-auto h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between rounded-t dark:border-gray-600">
                  <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="medium-modal">
                    <button onClick={() => setIsOpen(false)}>
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </button>
                </div>
                <div class="p-6 space-y-6">
                  <h3 class="text-2xl font-medium text-blue-400 dark:text-white text-center">
                    Where do you want the delivery?
                  </h3>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                    By knowing your area, we will be able to provide instant delivery from the nearest Life
                    store around you! </p>
                  <button class="ml-auto bg-blue-400 p-3 text-white rounded-xl w-full">Detect My Location</button>
                  <h3 class="text-xl font-medium  text-center">
                    OR
                  </h3>
                  <div class="flex">
                    <select id="states"
                      class=" flex-shrink-0 rounded-l-lg bg-gray-50 text-gray-900 text-sm  block  p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 ">
                      <option selected>Ship To</option>
                      <option value="CA">UAE</option>
                      <option value="TX">KSA</option>
                    </select>
                    <label for="states" class="sr-only">Type Location</label>
                    <input type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 border-l-2  block w-full p-2.5   dark:placeholder-gray-400 dark:text-white " placeholder="Type a Location" />
                  </div>
                  <a href="#"><h3 class="text-xl font-medium text-blue-400 dark:text-white text-center underline mt-16">
                    Or Login Now
                  </h3></a>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                    Get access to My Address, Orders & Prescriptions in your profile section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {overlayVisible ? <div id="overlay" className=" fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
          : null}



      </div>

    </>
  );
};

export default Navbar;
