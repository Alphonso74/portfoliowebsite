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
            <div>



            <Navbar/>

                    <div className="center-align">


                    <div className="card grey materialboxed">
                <img  className="responsive-img" alt="" src={resume} />

                    </div>
                </div>


            </div>
        );
    }
}

export default Resume;
