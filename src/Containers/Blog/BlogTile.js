import React from 'react';
// import './BlogCSS.css';
import Spinner from '../../Components/UI/Spinner';


const BlogTile = (props) => {

    // console.log("poop");


    const { title, link, thumbnail, content, pubDate, status } = props.blogData;

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

    function executeScroll()
    {
        window.scrollTo({

            top: 0,
            behavior: "smooth"
        });
    }
    function blogPost() {

        // console.log(props.status + ' poop');

        return (<div >
            <div className="col s12 center m7 ">



                <div className="card  ">


                    <div className="card-title s12">
                    <h3 className="RussoOne">{cleanTitle(title)}</h3>
                    </div>

                    <div className="card-image s12 ">
                <div >
                <img src={`${thumbnail}`} className="responsive-img"  alt={cleanTitle(title)}/>
            </div>
                    </div>
                    <div className="row s12 ">

                    <div className="card-content Langar">
                <h6>{toText(content)}</h6>
                        <div className="row s12">

                            <h5>{convertDate(pubDate)}</h5>




                        </div>
            </div>
                    </div>


            </div>
                </div>

            <div className="center-align s12">
                <button onClick={() => executeScroll()} className="waves-effect waves-light btn-large RussoOne black hoverable ">To Top</button>
            </div>
        </div>)

    }

    return props.status === null ? <Spinner/> : (
        <div >
            {blogPost()}

        </div>

    );
}

export default BlogTile;
