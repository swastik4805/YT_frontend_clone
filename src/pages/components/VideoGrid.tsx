import { VideoCard } from "./VideoCard"


import { VIDEOS } from "../videos"
export function VideoGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(vid=><div>
                <VideoCard thumbnail={vid.thumbnail}
                title={vid.title}
                channel={vid.channel}
                views={vid.views}
                uploadedBefore={vid.uploadedBefore}
                ></VideoCard>
            </div>)}
        </div>
    )
}