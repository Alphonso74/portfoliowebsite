import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
import resume from '../asset/resume.jpg';
import M from 'materialize-css/dist/js/materialize.min';
import './ResumeCSS.css';
class Resume extends Component {

    componentDidMount() {
        // console.log("Poop");


            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {});


    }



    render() {

        return (
            <body>


            <header>
            <Navbar/>
            </header>

            <main className="grey">
                    <div className="center-align ">

                        <div className="section  RussoOne">

                            <h1>My Resume</h1>

                        </div>

                    <div className="card ">
                <img  className="responsive-img materialboxed" alt="" src={resume} />

                    </div>
                </div>
            </main>


            </body>
        );
    }
}

export default Resume;
