import { useRouter } from "next/router"
import type { VIDEOS } from "../videos"

export const VideoCardHorizontal = ({video}) => {
    
    const router = useRouter();
    return <div className="cursor-pointer grid grid-cols-12" onClick={() => {
        router.push("/video/1");
    }}>
        <div className="rounded-xl overflow-hidden col-span-5">
            <div>
                <img src={video.thumbnail} />
                {/* <Line progress={10} /> */}
            </div>
        </div>
        <div className="col-span-7 pl-2">
            <div className={"text-white-800 text-sm font-medium pb-2"}>
                {video.title}
            </div>
            <div className={"text-gray-400 text-xs font-normal pb-1"}>
                {/* {video.description} */}
            </div>
            <div className="flex">
                <div className={"text-gray-400 text-xs font-normal	pr-2	"}>
                    {video.views} 
                </div>
                <div className={"text-gray-400 text-xs font-normal		"}>
                • {video.uploadedBefore}
                </div>
            </div>
        </div>
    </div>
}