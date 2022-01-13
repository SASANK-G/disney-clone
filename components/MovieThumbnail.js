import Image from "next/image";
import { useRouter } from "next/router";

export default function MovieThumbnail({result}) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const router = useRouter();
    const descrip = result.overview.split(' ').slice(0,15).join(' ');
    // console.log("eeeee", descrip);

    return (
        <div
        className="flex min-w-[250px] min-h-[170px] md:min-w-[160px] group md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer  hover:shadow-2xl transform hover:scale-110 transition duration-300"
        onClick={() => router.push(`/movie/${result.id}`)}
        >
        <Image
            src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
            }
            width={330}
            height={210}
            objectFit="cover"
            className="rounded-lg"
        />
            <div className="absolute bottom-0 hidden min-w-full bg-gray-600 h-2/5 group-hover:inline bg-opacity-70 px-[2px]"> 
                    <h6 className=" font-semibold text-[12px] min-w-full">{result.original_title || result.original_name}</h6>
                    <p className="font-medium text-[10px] min-w-full mt-1">{descrip}...</p>
            </div>
        </div>
    )
}
