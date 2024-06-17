import React from "react";
import SearchBar from "./SearchBar";

function NavBar(props){

    function setCategory(category){
        props.setCategory(category.target.value);
    }

    return (
        <div className="nav-container">
            <img src="/newslogo.png" alt="" className="nav-logo"/>
            <h2><a href="#">NewsCast</a></h2>
            <div>
                <SearchBar />
            </div>
            <div className="category-dropdown">
                <select name="category" id="Category" onChange={setCategory}>
                    <option value="general">Category</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
        </div>
    )

}

export default NavBar;