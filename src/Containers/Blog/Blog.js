import React, { useState, useEffect } from 'react';
import BlogTile from './BlogTile';
import Navbar from "../../Components/UI/Navbar/Navbar";
// import "./BlogCSS.css";
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



    return (


        <div>
            <Navbar/>

            {/*<Spinner/>*/}

        <div className=" section grey center-align  ">
            <h1 className="RussoOne">My Medium Posts</h1>
            <br/>
        </div>

            <div >
            {displayBlogs()}
            </div>


        </div>
    );
}

export default Blog;
