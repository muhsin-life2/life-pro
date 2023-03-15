import { useSession, getSession } from 'next-auth/react'

import { Modal } from 'flowbite'
import { ModalOptions, ModalInterface } from 'flowbite'



export default function Login({ data }) {
    function showModal() {
        const $modalElement = document.querySelector('#popup-modal');

        const modalOptions = {
            placement: 'bottom-right',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
        }

        const modal = new Modal($modalElement, modalOptions);
        modal.show()
    }

    return (
        <>
            {/* {console.log(session)} */}
            <div id="popup-modal" tabindex="-1" class="z-100 fixed top-1/2 left-1/2 z-50 h-[calc(100%-1rem)] hidden  -translate-y-1/2 -translate-x-1/2 overflow-y-auto overflow-x-hidden p-4 shadow-md md:h-auto w-96 rounded-b-3xl">
                <div class="relative h-full w-full max-w-md  bg-white md:h-auto rounded-3xl">
                    <button type="button" class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal"></button>
                    <div class="rounded-t-3xl bg-green-400 p-6 text-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-36 h-36 relative mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-10 w-10 absolute inset-0 top-[75px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="p-5 text-center">
                        <h3 class="mb-5 text-center text-3xl font-bold">Verified Device</h3>
                        <p class="font-semibold text-gray-600">Sign in Successfull</p>

                        <button type="button"  class="mt-10 rounded-lg border border-gray-200 bg-green-400 px-5 py-1.5 text-sm font-medium text-white hover:bg-green-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">OK</button>
                    </div>
                </div>
            </div>
            <div class="font-bold text-center p-5 text-xl" onClick={() => { showModal() }}>Hello {data ? data.token.name : 'User'}</div>
        </>
    )
}

export async function getServerSideProps(context) {


    return {
        props: {
        }
    }
}