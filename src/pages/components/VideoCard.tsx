import { useRouter } from "next/router";

export function VideoCard(props: any){
    const router=useRouter();
    return(
        
        <div className="p-2 cursor-pointer" onClick={()=>{
            router.push("video/1");
        }}>
            <img className="rounded-xl" src={props.thumbnail}></img>
            <div className="grid grid-cols-12 pt-2">

                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src="image2.jpg"></img>
                </div>

                <div className="col-span-11 pl-2">
                    <div >{props.title}</div>
                    <div className="col-span-11 text-gray-400 text-sm">{props.channel}</div>
                    <div className="col-span-11 text-gray-400 text-sm">{props.views} . {props.uploadedBefore}</div>
                </div>
            </div>
        </div>
            
        
    )
}