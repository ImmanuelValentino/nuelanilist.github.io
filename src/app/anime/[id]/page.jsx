import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`)


    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-putih text-2xl">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-putih overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2 ">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>GENRE</h3>
                    <p>{anime.data.genres.type}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>STATUS</h3>
                    <p>{anime.data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center hover:bg-color-coalcolor hover:text-color-secondary rounded border border-color-secondary p-2">
                    <h3>RATING</h3>
                    <p>{anime.data.rating}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-putih">
                <Image src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    height={250}
                    width={250}
                    className="w-full rounded object-cover" />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page