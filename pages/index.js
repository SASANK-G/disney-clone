import { getProviders, getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Brands from '../components/Brands';
import Header from '../components/Header'
import Hero from '../components/Hero';
import Slider from '../components/Slider';

export default function Home() {

  const { data:session } = useSession();
  
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {!session ? (
        <Hero/>
      ):(
        <main>
            <Slider/>
            <Brands/>
        </main>
      )}
     
    </div>
  )
}


export async function getServerSideProps(context){

  const providers = await getProviders();
  const session = await getSession(context);//server side rendering

  return {
    props: {
      session,
    },
  };
}