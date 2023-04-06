
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import Image from 'next/image'

export default function MenuLanguage({ countries, languageClicked, languages, languageBackClicked }) {

    const [laguage, setLaguage] = useState(languages[0].name)
    const [chooseCountr, setChooseCountr] = useState(true)
    const [chooseLanguage, setChooseLanguage] = useState(false)

    function languageClickEvent() {
        setChooseCountr(false)
        setChooseLanguage(true)
        languageClicked(laguage)
    }
    function languageBackClick() {
        setChooseCountr(true)
        setChooseLanguage(false)
        languageBackClicked()
    }
    return (
        <>
            {chooseCountr ?
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute right-0 max-h-60 w-[14rem] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm divide-y-[1px] divide-gray-300">

                        <div className='p-2 text-xs flex justify-between items-center'>
                            <p>SELECT LANGUAGE</p>
                            <button className=' flex space-x-2 items-center' onClick={() => {
                                languageClickEvent()
                            }}>
                                <p className='text-pink-600'>{laguage}</p>
                                <ChevronRightIcon className='w-5 h-5 my-auto'/>
                            </button>
                            {/* /////////////////////////////// */}

                            {/* /////////////////////////////// */}

                        </div>

                        <div className='p-2 text-xs'>CHOOSE COUNTRY</div>

                        {countries.map((obj, personIdx) => (

                            <Listbox.Option
                                key={personIdx}
                                className={({ selected }) =>
                                    `flex cursor-default select-none p-2 space-x-4 ${selected ? 'bg-blue-500 text-white' : ''
                                    }`
                                }
                                value={obj.flag}
                            >

                                {({ selected }) => (
                                    <>


                                        <Image src={obj.flag} height={25} width={25} alt="flag-img" />
                                        <div
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {obj.country}
                                        </div>
                                        {/* {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                ) : null} */}


                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>

                : ""}
            {chooseLanguage ?

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute right-0 max-h-60 w-[14rem] overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm divide-y-[1px] divide-gray-300">
                        <button className="flex space-x-2 p-2 " onClick={() => { languageBackClick() }}>
                            <ChevronLeftIcon className='w-5 h-5' />
                            <div className='text-pink-600'>Back</div>
                        </button>
                        {languages.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={person.name}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {person.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
                : ""}
        </>

    )
}


