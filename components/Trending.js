import MovieThumbnail from "./MovieThumbnail";
import ShowThumbnail from "./ShowThumbnail";

export default function Trending({ results, title }) {



    return (
        <div className="relative flex flex-col px-8 mx-auto my-10 space-y-2 max-w-max">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex p-2 -m-2 space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-hide ">
                {results.map((result) => (
                result.media_type=="movie"?(
                <MovieThumbnail key={result.id} result={result} mediaType={result.media_type}/>
                ):(<ShowThumbnail key={result.id} result={result} mediaType={result.media_type}/>)
                
                ))}
                
            </div>
        </div>
    )
}
