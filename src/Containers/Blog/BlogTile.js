import React from 'react';
import './BlogCSS.css';

const BlogTile = (props) => {

    // console.log("poop");

    const { title, link, thumbnail, content, pubDate } = props.blogData;

    function cleanTitle(checkTitle) {
        checkTitle = checkTitle.replace("amp;", "");
        return checkTitle
    }

    function truncateText(text, start, len) {
        return text.length > len ? text.slice(start, len) : text;
    }

    function toText(block) {
        let tag = document.createElement('div');
        tag.innerHTML = block;
        block = tag.innerText;
        return block
    }

    function convertDate(date) {
        let dateArray = date.slice(0, 10).split("-")
        let year = dateArray.shift();
        dateArray.push(year)
        // console.log(date)
        // console.log("poop");
        return `Published: ${dateArray.join("/")}`;
    }

    function blogPost() {
        return (<div className="row s12 ">
            <div className="col s12 center RussoOne ">



                <div className="card  ">


                    <div className="card-title">
                    <h3>{cleanTitle(title)}</h3>


                    <div className="col s6 ">
                <div className="card-image">
                <img src={`${thumbnail}`} className="Image" alt={cleanTitle(title)}></img>
            </div>
                    </div>
                    <div className="col s6 ">

                    <div className="card-content">
                <h6>{toText(content)}</h6>
                <h4>{convertDate(pubDate)}</h4>
            </div>
                    </div>

                    </div>
            </div>
                </div>
        </div>)

    }

    return (
        <div >
            {blogPost()}
        </div>
    );
}

export default BlogTile;
