import React, { useState, useEffect } from 'react';
import BlogTile from './BlogTile';
import Navbar from "../../Components/UI/Navbar/Navbar";
import "./BlogCSS.css";
import Spinner from '../../Components/UI/Spinner';




const Blog = () => {



    const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40alphonsomckenzieblog";
    const [myBlog, setMyBlog] = useState([]);

    useEffect(() => {
        fetch(rss2json)
            .then(res => res.json())
            .then(data => {
                setMyBlog(data)
                // console.log(data)
            })
    }, [rss2json]);

    function displayBlogs() {
        // console.log(myBlog.status + ' poop');


        return myBlog.items && myBlog.items.map(blog => {
            return <BlogTile key={blog.pubDate} blogData={blog} status={myBlog.status} />
        })
    }

    function executeScroll()
    {
        window.scrollTo({

            top: 0,
            behavior: "smooth"
        });
    }

    return (


        <body>
        <header>
            <Navbar/>
        </header>

            {/*<Spinner/>*/}

            <main >
        <div className=" section grey center-align  ">
            <h1 className="RussoOne">My Medium Posts</h1>
            <br/>
        </div>

            <div >
            {displayBlogs()}
            </div>
            </main>

            {/*<div className="center-align s12">*/}
            {/*<button onClick={() => executeScroll()} className="waves-effect waves-light btn-large RussoOne grey hoverable ">To Top</button>*/}
            {/*</div>*/}

        <footer className="page-footer white RussoOne">
            <div className="container">
                <div className="row">
                    <div className="col  s6 ">
                        <h5 className="black-text">Is that it?....</h5>

                        <p className="black-text text-lighten-4">Send me a message!</p>
                    </div>
                    <div className="col  s6 center-align">
                        <h5 className="black-text">Medium Profile</h5>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://alphonsomckenzieblog.medium.com/';
                        }} className="waves-effect waves-light btn-large RussoOne black hoverable ">Profile</button>

                    </div>
                </div>
            </div>


        </footer>



        </body>
    );
}

export default Blog;
