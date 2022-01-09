import Image from 'next/image'
import React from 'react'
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';


function Header({providers, session}) {

    // const { data:session } = useSession();
    console.log("qqqq", session);
    const router = useRouter();
   

    return (
        <div className='sticky bg-[#040714] top-0 z-[1000] flex h-[68px] items-center px-9 md:px-12'>
            <Image
                src='/images/logo.svg'
                width={68}
                height = {68}
                className='cursor-pointer '
            />

            {session && (
                    <div className="items-center hidden ml-10 space-x-6 md:flex">
                    <a className="header-link group">
                        <HomeIcon className="h-4" />
                        <span className="span">Home</span>
                    </a>
                    <a className="header-link group">
                        <SearchIcon className="h-4" />
                        <span className="span">Search</span>
                    </a>
                    <a className="header-link group">
                        <PlusIcon className="h-4" />
                        <span className="span">Watchlist</span>
                    </a>
                    <a className="header-link group">
                        <StarIcon className="h-4" />
                        <span className="span">Originals</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/movie-icon.svg" alt="" className="h-5" />
                        <span className="span">Movies</span>
                    </a>
                    <a className="header-link group">
                        <img src="/images/series-icon.svg" alt="" className="h-5" />
                        <span className="span">Series</span>
                    </a>
                    </div>
            )}
            
            {!session ? (
                <button
                className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
                onClick={()=>signIn("google")}
                >
                Login
                </button>
            ) : (
                <img
                src={session.user.image}
                className="object-cover w-8 h-8 ml-auto rounded-full cursor-pointer"
                onClick={() => signOut()}
                />
            )}
                
            
        </div>
    )
}

export default Header


