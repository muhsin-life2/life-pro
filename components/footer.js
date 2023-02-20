export default function Footer() {
    return (
        <>
            <div class="z-10 max-w-screen-2xl mx-auto">

                <div class="flex justify-around border px-20 p-5">
                    <div>
                        <div class="text-center text-3xl font-bold ml-2">26+</div>
                        <div class=" text-center font-semibold text-gray-600">Years of Trust</div>
                    </div>
                    <div>
                        <div class="text-center text-3xl font-bold ml-2">25M+</div>
                        <div class=" text-center font-semibold text-gray-600">Orders Delivered</div>
                    </div>
                    <div>
                        <div class="text-center text-3xl font-bold ml-5">375+</div>
                        <div class="text-center font-semibold text-gray-600">Stores</div>
                    </div>
                </div>
                <div class="relative -z-10">
                    <img class="sm:block lg:block" src="https://www.lifepharmacy.com/images/home/subscribe-2.jpg" />
                    <img class="sm:block lg:hidden h-full" src="https://www.lifepharmacy.com/images/home/subscribe-2.jpg" />
                    <img class="sm:block lg:hidden h-full" src="https://www.lifepharmacy.com/images/home/subscribe-2.jpg" />

                    <div class="absolute top-3 sm:top-6 lg:top-1/4 right-0 left-0">
                        <div class="lg:flex lg:justify-around sm:grid-flow-row">
                            <div class="lg:hidden mb-4">
                                <div class="text-white font-semibold text-2xl text-center mb-2">Download App</div>
                                <div class="flex justify-center">
                                    <img src="https://www.lifepharmacy.com/images/appstore.svg" width="20%" class="mr-3" />
                                    <img src="https://www.lifepharmacy.com/images/appstore.svg" width="20%" />
                                </div>
                            </div>
                            <div class="lg:w-4/6">
                                <div class="text-white text-center mb-3">Subscribe For The Latest Discount & Trends</div>
                                <div class="relative">
                                    <input type="text" class="w-full rounded-full py-3"></input>
                                    <button type="submit" class="absolute top-0 right-0 p-3.5 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                            <div class="sm:hidden md:hidden lg:block hidden">
                                <div class="text-white font-semibold text-2xl text-center mb-2">Download App</div>
                                <div class="flex justify-around">
                                    <img src="https://www.lifepharmacy.com/images/appstore.svg" width="45%" />
                                    <img src="https://www.lifepharmacy.com/images/appstore.svg" width="45%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
                    <div class="md:flex md:justify-between px-4">
                        <div class="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" class="flex items-center mb-4">
                                <img src="https://www.lifepharmacy.com/images/logo.svg" class="h-10 mr-3" alt="FlowBite Logo" />
                            </a>
                            <div class="text-gray-400">Life Pharmacy - Corporate Ofiice <br /> Marasi Dr -Business Bay  <br /> Bay Square - Dubai</div>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-5 lg:text-sm md:grid-cols-3 ">
                            <div>
                                <h1 class="mb-3 text-gray-900 dark:text-white font-bold">Know Us</h1>
                                <ul class="text-gray-600 dark:text-gray-400">
                                    <li class="mb-2">
                                        <a href="https://flowbite.com/" class="hover:text-blue-500 text-gray-500 underline-tra">About LifeStore</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://tailwindcss.com/" class="hover:text-blue-500 text-gray-500 underline-tra">Contact Us</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://tailwindcss.com/" class="hover:text-blue-500 text-gray-500 underline-tra">Our Blog</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://tailwindcss.com/" class="hover:text-blue-500 text-gray-500 underline-tra">Store Locator</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-3 text-gray-900  dark:text-white font-bold">Our Policies</h2>
                                <ul class="text-gray-600 dark:text-gray-400">
                                    <li class="mb-2">
                                        <a href="https://github.com/themesberg/flowbite" class="hover:text-blue-500 text-gray-500 underline-tra ">Refund Policy</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" class="hover:text-blue-500 text-gray-500 hover:text-blue-500 underline-tra">Shipping Terms</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" class="hover:text-blue-500 text-gray-500 underline-tra">Privacy Policy</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" class="hover:text-blue-500 text-gray-500 underline-tra">Terms & Conditions</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-3 text-gray-900 dark:text-white font-bold">Shop by Category</h2>
                                <ul class="text-gray-600 dark:text-gray-400">
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Beauty Care</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-3 text-gray-900 dark:text-white font-bold">Useful Links</h2>
                                <ul class="text-gray-600 dark:text-gray-400">
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Login or SignUp</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">View Cart</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">My Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-2 text-gray-900 dark:text-white font-bold">My Account</h2>
                                <ul class="text-gray-600 dark:text-gray-400">
                                    <li class="mb-3">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Browse by Brand</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Sitemap</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Offers / Coupons</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="hover:text-blue-500 text-gray-500 underline-tra">Appointments</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Life Pharmacy</a>. All Rights Reserved.
                        </span>
                    </div>
                </footer>

            </div>
            

        </>
    )
}