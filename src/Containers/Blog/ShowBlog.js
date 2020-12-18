import React from "react";
// import c from "./ShowBlog.module.css";
// import ToText from "../../utils/ToText";
// import moment from "moment";
import { Link, withRouter } from "react-router-dom";

function ShowBlog(props) {

    return (

        <div>

            <h1>help</h1>

            <div >
                <div >
                    <a
                        href={props.profileurl}
                        rel="noopener noreferrer"
                        target="_blank"

                    >
                        Written By Alphonso Mckenzie
                    </a>
                </div>



                <div className="card-body">
                    <h5 >


                            {props.title}

                    </h5>

                    <p>
                        {props.description.substring(0, 1000)}
                    }</p>
                    <br />


                        {props.author}


                    <br />
                    <span className="text-muted">

                        {props.pubDate}
          </span>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ShowBlog);
