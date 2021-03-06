import Head from "next/head";
import Image from "next/image";


function Hero() {
    return (
        <section className="relative">
      <Head>
        <title>Log in | Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute flex flex-col items-center justify-center w-full max-w-screen-sm p-8 mx-auto -mt-16 space-y-3 top-1/4">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />
          <button className="bg-blue-600 uppercase text-lg tracking-wide font-bold py-3 px-4 w-7/12 rounded hover:bg-[#0485ee]">
            Get all there
          </button>
          {/* <p className="text-xs text-center ">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p> */}
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
    )
}

export default Hero
