import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon, CheckIcon, ChevronLeftIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import TransitionComp from './transition'
import { useRouter, usePathname } from 'next/navigation'

const LanguageChangeModal = ({ setModalState, modalState, currentLanguage, currentCountry, countries, languages, lang }) => {
    const router = useRouter()

    const searchParams = usePathname()
    const currentPath = searchParams?.substring(7, searchParams.length)

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].name)
    const [IsLanguageChangeClicked, languageChangeClicked] = useState(false)
    const [IsCountryChangeClicked, CountryChangeClicked] = useState(true)
    const [selected, setSelected] = useState('')
    const [selectedCountryPath, setSelectedCountryPath] = useState({
        countryPath: "",
    })

    function closeModal() {
        setModalState(false)
    }

    function languageOnClicked(path) {
        closeModal()
        router.push(`/${selectedCountryPath}-${path}/${currentPath}`)
    }

    const countryProps = <div className='space-y-2'>
        {countries.map(contr => (
            <div onClick={() => { countryClicked(contr.path) }} className="flex justify-between hover:bg-gray-200 border border-gray-200 rounded-lg p-2 cursor-pointer">
                <div className="flex items-center justify-start space-x-4 ">
                    <div className="h-10 w-10 rounded-full">
                        <Image src={contr.flag} height="20" width="20" className="h-full w-full" alt="" />
                    </div>

                    <p className="font-bold">{contr.country}</p>
                    {contr.path === currentCountry.path ?
                        <div className='bg-emerald-500 flex text-white text-xs  rounded-full px-[5px] py-[3px] items-center space-x-2'>
                            <CheckIcon className='w-4 h-4' />
                            <p>{currentLanguage.name}</p>
                        </div> : null
                    }
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 my-auto">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>

            </div>
        )
        )}
    </div>

    const languageProps = <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-2">
            {languages.map((plan) => (
                <RadioGroup.Option
                    onClick={() => { languageOnClicked(plan.path) }}
                    key={plan.name}
                    value={plan.name}
                    className={({ active, checked }) =>
                        `
${checked ? 'bg-emerald-200 bg-opacity-75 ' : 'bg-white'
                        }
relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                >
                    {({ active, checked }) => (
                        <>
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${checked ? '' : 'text-gray-900'
                                                }`}
                                        >
                                            {plan.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                }`}
                                        >

                                        </RadioGroup.Description>
                                    </div>
                                </div>
                                {checked && (
                                    <div className="shrink-0 text-emerald-500">
                                        <CheckCircleIcon className='w-6 h-6' />
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </RadioGroup.Option>
            ))}
        </div>
    </RadioGroup>
    // function setLanguage() {
    //     for (let i = 0; i < languages.length; i++) {
    //         if (languages[i].name === currentLanguage.name) {
    //             return languages[i].name
    //         }
    //     }
    // }
    function languageBackClicked() {
        CountryChangeClicked(true)
        languageChangeClicked(false)
    }
    function countryClicked(path) {
        if (path === lang[0]) {
            setSelected(currentLanguage.name)
        }
        CountryChangeClicked(false)
        languageChangeClicked(true)
        setSelectedCountryPath(contr => contr.countryPath = path)
    }
    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={modalState}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div> */}

            <Transition appear show={modalState} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25 " />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all relative">
                                    <div className='flex justify-start space-x-3 my-auto'>
                                        {!IsCountryChangeClicked ?


                                            <div onClick={() => { languageBackClicked() }} className='cursor-pointer'> <ChevronLeftIcon className='w-7 h-7 ' /></div>

                                            : null}
                                        <p className="font-bold text-lg pb-6">Select Your Preference</p>


                                    </div>

                                    <button className="absolute top-4 right-4 bg-transparent  hover:text-gray-900 rounded-lg text-sm  items-center  " onClick={() => { closeModal() }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                        </svg>
                                    </button>


                                    {IsCountryChangeClicked ?
                                        <TransitionComp props={countryProps} setTransition={IsCountryChangeClicked} />
                                        : null}


                                    {IsLanguageChangeClicked ?
                                        <TransitionComp props={languageProps} setTransition={IsLanguageChangeClicked} />
                                        : null}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}


export default LanguageChangeModal