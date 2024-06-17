import {React, useState} from "react";
import axios from "axios"

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function SearchBar(){

    const [searchText, setSearchText] = useState("");
    const [queryResult, setQueryResult] = useState([])

    function openInNewTab(url){
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    async function fillData(value){
        const data = await axios.get(`https://newsapi.org/v2/everything?q=${value}&searchin=title&language=en&apiKey=${NEWS_API_KEY}`)
        setQueryResult(data.data.articles)
    }

    return (

        <div className="outer-search">
            <div className="search-bar">
                <img src="/search.svg" alt="" />
                <input type="text" placeholder="Search News" 
                    value={searchText}
                    onChange={(e)=>{
                            var value = e.target.value; 
                            setSearchText(value)
                            if(value.length > 1){
                                fillData(value)
                            } else{
                                setQueryResult([])
                            }
                        }
                    }
                />
            </div>
            {queryResult.length >0?
            <div className="query-result">
                {queryResult.filter((item)=>{
                    if(item.title !== "[Removed]"){
                        return item;
                    }
                }).slice(0,10).map((item, index)=>(
                    <div key={index} onClick={() => openInNewTab(item.url)}>
                        <h3>{item.title}</h3>
                        <hr />
                    </div>
                ))}
            </div> : null}
        </div>)

}

export default SearchBar;