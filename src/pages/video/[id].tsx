import { Appbar } from "../components/Appbar";
import { VideoCardHorizontal } from "../components/VideoCardHorizantal";
import { VIDEOS } from "../videos";


export default function VideoPage(){
    return(
        <div>
            <Appbar></Appbar>
            <div className="grid gap-4 grid-cols-12 pt-5">
                <div className="col-span-12 md:col-span-9 sm:col-span-8">
                    <video width={"100%"} height={"720px"} controls src="https://www.youtube.com/watch?v=IY4x85zqoJM&t=2s"/>
                    <div className="text-2x1">
                        Apple Vision Pro
                    </div>
                </div>
                <div className="col-span-12 md:col-span-3 sm:col-span-4">
                    {VIDEOS.map(x=><VideoCardHorizontal video={x}/>)}
                </div>
            </div>
        </div>
    )
}
