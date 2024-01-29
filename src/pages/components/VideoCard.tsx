
export function VideoCard(props){
    return(
        
        <div className="p-2">
            <img className="rounded-xl" src="image1.jpg"></img>
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