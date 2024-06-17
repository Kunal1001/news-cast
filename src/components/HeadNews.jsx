import React from "react";

function HeadNews(props){

    return (
        <div className="head-news-conatiner" onClick={props.onClick}>
            <img src={props.urlToImage} alt="head-news-pic" />
            <div>
                <h1>
                    {props.title}
                </h1>
                <hr />
                <p>
                    {props.time.split("T")[0]}
                </p>
                <h3>
                    {props.description}
                </h3>
            </div>

        </div>
    )

}

export default HeadNews;