import { SearchBar } from "./Searchbar";

export function Appbar(){
    return(
        <div className="flex justify-between">
            <div className="pt-2">
                <img src="/yt.png"></img>
            </div>
            <SearchBar></SearchBar>
            <div>signin</div>
        </div>
    )
}