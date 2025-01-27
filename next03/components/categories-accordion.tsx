import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Example({ acc_data }) {

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

    return (
        <div className="w-full   grid lg:grid-cols-2 px-2">
            {acc_data.map((cat_data, indx) => (
                cat_data.sections.length > 0 ?
                    <div className="mx-auto w-full rounded-2xl bg-white p-2">
                        <Disclosure defaultOpen={true}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <h2>{cat_data.name}</h2>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm border-gray-200 border bg-purple-100 rounded-xl my-2  text-gray-500">
                                        <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3   gap-y-5 p-2">{cat_data.sections.map(ch_data => (
                                            <a href="#" className=" xl:flex mx-2  hover:bg-white rounded-lg p-2 hover:border-gray-200 hover:border border border-gray-50 group/item">
                                                <Image className="xl:mx-0 mx-auto group-hover/item:scale-110 transition scale-100 duration-200 ease-in-out" src={LoadImages(ch_data.images)} height={50} width={50} alt={ch_data.name} />
                                                <p className="xl:ml-3 xl:my-auto mt-3 xl:text-left ml-0 text-center text-[11px] my-auto ">{ch_data.name}</p>
                                            </a>
                                        ))}</div>                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        {/* <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Do you offer technical support?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    No.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure> */}
                    </div>
                    : ""
            ))}

        </div>
    )
}
