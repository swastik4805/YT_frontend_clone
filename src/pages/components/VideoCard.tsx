
export function VideoCard(){
    return(
        
        <div>
            <img className="rounded-xl" src="image1.jpg"></img>
            <div className="grid grid-cols-12 pt-2">

                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src="image2.jpg"></img>
                </div>

                <div className="col-span-11 pl-2">
                    <div >Hello Apple Vision Pro</div>
                    <div className="col-span-11 text-gray-400 text-sm">Apple</div>
                    <div className="col-span-11 text-gray-400 text-sm">202K views . 5 hours ago</div>
                </div>
            </div>
        </div>
            
        
    )
}