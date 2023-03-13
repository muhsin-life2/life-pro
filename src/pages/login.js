import { useSession, getSession } from 'next-auth/react'
export default function Login({data}) {
    const { session, status } = useSession()

    return (
        <>
            {/* {console.log(session)} */}
            <div class="font-bold text-center p-5 text-xl">Hello {data?data.token.name:'User'}</div>
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession(context);
    if(session){
        console.log(session);
    }

    return{
        props:{
            data:session
        }
    }
}