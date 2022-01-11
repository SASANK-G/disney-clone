import Image from "next/image";


export default function Brands() {
    return (
        <section className="flex flex-wrap items-center justify-center gap-6 px-6 mx-auto mt-10 max-w-max md:flex-row">
            <div className="brand group">
                <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
                <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden object-cover rounded-lg group-hover:inline"
                >
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="brand group">
                <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
                <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden object-cover rounded-lg group-hover:inline"
                >
                    <source src="/videos/pixar.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="brand group">
                <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
                <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden object-cover rounded-lg group-hover:inline"
                >
                    <source src="/videos/marvel.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="brand group">
                <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
                <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden object-cover rounded-lg group-hover:inline"
                >
                    <source src="/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="brand group">
                <Image
                src="/images/national-geographic.png"
                layout="fill"
                objectFit="cover"
                />
                <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden object-cover rounded-lg group-hover:inline"
                >
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
        
        </section>
    )
}
