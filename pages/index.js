import { getProviders, getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Header from '../components/Header'

export default function Home({providers}) {

  const { data:session } = useSession();
  
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header providers = {providers} session={session}/>
     
    </div>
  )
}


export async function getServerSideProps(context){

  const providers = await getProviders();
  const session = await getSession(context);//server side rendering

  return {
    props: {
      providers,
      session,
    },
  };
}