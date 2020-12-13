import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import {NavLink} from "react-router-dom";
// import photo from '../../../asset/alphonsopicture.jpg';
class Navbar extends Component{


    componentDidMount() {


            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems, {});


    }

    render() {

        return (

            <div>


                <nav>
                    <div className="nav-wrapper black">

                        <i className="brand-logo">Alphonso's</i>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down active">
                            <div className="black-text">
                                <li ><NavLink to='/mainpage' exact >Home</NavLink></li>
                                <li ><NavLink to='/resume' exact >Resume</NavLink></li>
                                <li ><NavLink to='/blog' exact >Blog</NavLink></li>
                                <li ><NavLink to='/contact' exact >Contact</NavLink></li>

                                {/*<li><a href="sass.html">Resume</a></li>*/}
                            {/*<li><a href="badges.html">Blog</a></li>*/}
                            {/*<li><a href="collapsible.html">Contact Me</a></li>*/}
                            </div>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav sidenav-close" id="mobile-demo">
                    <li><NavLink to='/mainpage' exact >Home</NavLink></li>
                    <li><NavLink to='/resume' exact >Resume</NavLink></li>
                    <li><NavLink to='/blog' exact >Blog</NavLink></li>
                    <li><NavLink to='/contact' exact >Contact</NavLink></li>
                </ul>


            </div>
        )
    }

}

export default Navbar;
