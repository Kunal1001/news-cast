import React from "react";

function NewsList(props){

    return (
        <div className="news-list-conatiner" onClick={props.onClick}>
            <img src={props.urlToImage} alt="news-pic" />
            <div>
                <h2>
                    {props.title}
                </h2>
                <hr />
                <p>
                    {props.time.split("T")[0]}
                </p>
                <h4>
                    {props.description}
                </h4>
            </div>

        </div>
    )

}

export default NewsList;