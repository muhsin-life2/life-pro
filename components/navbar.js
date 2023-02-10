import Image from "next/image";
const Navbar = ({ data, brands_data }) => {
  function categoryChildrenData(chidren_data) {
    return (
      chidren_data.map(cd => (
        <div className="grid-flow-row mb-3"><div className="font-bold mb-5"> {cd.name} </div> {sectionsData(cd.sections)} </div>

      ))
    )
  }

  function sectionsData(sectionsData) {

    return (
      sectionsData.map(d => (
        <div className="hover:text-blue-500 mb-3"><a href="#"> {d.name} </a></div>
      ))
    );
    // for (var i = 0; i < sectionsData.length; i++) {
    //   if (i < limit) {
    //     data_section += <div className="hover:text-blue-500 mb-3"><a href="#"> {sectionsData[0].name} </a></div>
    //   }
    //   else {
    //     data_section += <div className="hover:text-blue-500 mb-3 hidden ' + sect_name + '"><a href="#"> {sectionsData[0].name} </a></div>
    //   }
    // }
  }
  return (
    <>
      <div className="">
        <div className="grid grid-flow-col bg-indigo-900 p-4 px-8 hidden lg:flex md:flex gap-5">
          <img src="https://www.lifepharmacy.com/images/logo-white.svg" alt=""
            className="min-w-min bg-indigo-900 filter " />
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
              <input type="text" id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                placeholder="Search for Products..." required />
            </div>
          </form>


          <div className="grid grid-flow-col w-100 gap-5  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="my-auto h-8 w-8 text-white ">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="my-auto h-8 w-8 text-white ">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="my-auto h-8 w-8 text-white ">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 py-1 px-8 bg-pink-700 text-white text-sm lg:flex md:flex hidden">
          <div className="text-base"> Highest Rated Pharmacy App in UAE | Rating | Download </div>
          <div className="text-end ml-auto"> <span className="font-bold">DELIVER TO:</span> undefined, undefined
            <button className="bg-white text-black rounded text-xs px-3 ml-3 py-1">CHANGE</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 border border-gray-300 px-8 py-1 hidden lg:flex md:flex ">
        <div className="group inline-block">
          <button href="#"
            className="group-hover:bg-blue-500 py-1 group-hover:text-white hover:text-white transition-color duration-500 dropdown group"
            id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6 my-2 float-left mr-3">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div className="text-start mt-2 float-left mr-16">Shop by Category</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className=" h-6 float-right mt-2 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </button>

          {/* <ul className=" text-sm text-gray-700 dark:text-gray-700  border-x-2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
                transition duration-300 ease-in-out origin-top bg-white w-[15.20rem]" id="catgories-element">
            {data.data.map(item => (
              <li key="{item.name}"> <button href="#" className=" w-full py-3 pr-10 pl-5 text-left flex  border-gray-200 border-b-2 hover:text-blue-500"> <span className="flex-1">  {item.name}   </span> <span className="mr-auto my-auto"> <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> </span> </button>
                <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-200 ease-in-out origin-top-left hover-menu p-5 h-[32rem] overflow-auto border border-gray-300">
                  <li key="" className="px-3 py-1 ">
                    <div className="grid grid-cols-4 gap-x-10 gap-y-3 grid-rows-6 cat-elements mb-10">
                      {categoryChildrenData(item.children)}
                    </div>  </li> </ul> </li>

            )

            )}


          </ul> */}

        </div>

        <div className="grid grid-flow-col gap-3">
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
                z-10 transition duration-150 ease-in-out origin-top hidden group-hover:flex flex-col absolute left-0 p-5 text-black w-[84rem] overflow-auto h-[30rem]">
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
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-700  border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 bg-white">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownDefaultButton">
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
      <div class="rounded-xl py-5 fixed bottom-28 inset-x-0 px-5 mx-5 border border-gray-300 flex justify-between text-sm bg-white sm:visible lg:w-7/12 lg:ml-auto z-10 bg-white"
        id="location-selector-element">
        <div class="text-indigo-900 font-bold">Add your location to get an accurate delivery time</div>
        <div class="flex justify-evenly">

          <button class="text-pink-900 font-bold" data-modal-target="medium-modal"
            data-modal-toggle="medium-modal">Select your area</button>
          <svg class="w-5 mr-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <button data-modal-hide="location-selector-element">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div id="medium-modal" tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-lg md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between rounded-t dark:border-gray-600">
              <button type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="medium-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close modal</span>
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
                <button id="states-button" data-dropdown-toggle="dropdown-states"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button">

                  <select id="states"
                    class="bg-gray-50 text-gray-900 text-sm rounded-r-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                    <option selected>Ship To</option>
                    <option value="CA">UAE</option>
                    <option value="TX">KSA</option>
                  </select>
                </button>
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
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    </>
  );
};

export default Navbar;