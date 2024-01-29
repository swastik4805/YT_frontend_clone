import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
},{
    title:"Hello Apple Vision Pro",
    channel:"Apple",
    views:"202K",
    uploadedBefore:"6 hours ago"
}]


export function VideoGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(vid=><div>
                <VideoCard title={vid.title}
                channel={vid.channel}
                views={vid.views}
                uploadedBefore={vid.uploadedBefore}
                ></VideoCard>
            </div>)}
        </div>
    )
}