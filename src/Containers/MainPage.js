import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
import car2 from '../asset/car2.jpg';
import snow from '../asset/snow.jpg';
import ball from '../asset/ball.jpg';
// import MainPageCSS from './MainPageCSS.css';

import M from 'materialize-css/dist/js/materialize.min';

class MainPage extends Component {

    componentDidMount() {
        // console.log("Poop");


            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});


    }

    render() {

        return (
            <div>

                <Navbar/>

                <div className="section grey">
                    <div className="row container">
                        <div className="col s12 m10 offset-m1">
                            <h2 className="header">Alphonso Website</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background
                                content or image in this case, is moved at a different speed than the foreground content
                                while scrolling.</p>

                            <h4 className="light">Parallax Demo HTML</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src={car2} alt={"James Harden"}/></div>
                </div>
                <div className="section blue">
                    <div className="row container">
                        <div className="col s12 m10 offset-m1">
                            <h2 className="header">Second Section</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background
                                content or image in this case, is moved at a different speed than the foreground content
                                while scrolling.</p>

                            <h4 className="light">Parallax Demo HTML</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>
                <div className="parallax-container">
                <div className="parallax"><img src={snow}/></div>
            </div>

                <div className="section grey">
                    <div className="row container">
                        <div className="col s12 m10 offset-m1">
                            <h2 className="header">Third Section</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background
                                content or image in this case, is moved at a different speed than the foreground content
                                while scrolling.</p>

                            <h4 className="light">Parallax Demo HTML</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src={ball}/></div>
                </div>

                <div className="section blue">
                    <div className="row container">
                        <div className="col s12 m10 offset-m1">
                            <h2 className="header">Fourth Section</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background
                                content or image in this case, is moved at a different speed than the foreground content
                                while scrolling.</p>

                            <h4 className="light">Parallax Demo HTML</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>


                <footer className="page-footer black">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize
                                    your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        );
    }
}

export default MainPage;
