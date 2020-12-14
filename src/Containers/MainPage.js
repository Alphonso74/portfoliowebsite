import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
import car2 from '../asset/car2.jpg';
import snow from '../asset/snow.jpg';
import ball from '../asset/ball.jpg';
// import alphonso from '../asset/jamesHarden.jpg';
// import MainPageCSS from './MainPageCSS.css';
import github from '../asset/github.jpeg';
import linkedIn from '../asset/linkedIn.jpg';
import youtube from '../asset/youtube.png'
import photo3 from '../asset/newpic1.jpg';
import M from 'materialize-css/dist/js/materialize.min';
import './MainPageCSS.css';

class MainPage extends Component {

    componentDidMount() {
        // console.log("Poop");


            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});


    }

    executeScroll = () => window.scrollTo(0, 0);


    render() {

        return (
            <div>

                <Navbar />

                <div className="section">
                    <div className="row container center-align">
                        <div className="col s12 ">

                            <h2 className="header RussoOne">Welcome To My Website</h2>
                            <p className="grey-text text-darken-3 lighten-3 RussoOne">Take a look around!</p>

                            <h4 className="light RussoOne">My Links</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>




                    <div className="row center RussoOne">
                        <div className="col s4 ">
                            <div className="card small hoverable">
                                <div className="card-image">
                                    <img src={github} alt=""/>
                                </div>
                                <div className="card-content">
                                </div>
                                <div className="card-action">
                                    <a href="https://github.com/Alphonso74">Check Out My Projects!</a>
                                </div>
                            </div>
                        </div>



                        <div className="col s4 ">
                            <div className="card small hoverable">
                                <div className="card-image">
                                    <img src={linkedIn} alt=""/>
                                </div>
                                <div className="card-content">
                                </div>
                                <div className="card-action">
                                    <a href="https://www.linkedin.com/in/alphonso-mckenzie-a32440189/">Lets Connect!</a>
                                </div>
                            </div>
                        </div>



                            <div className="col s4">
                                <div className="card small hoverable">
                                    <div className="card-image">
                                        <img src={youtube} alt=""/>
                                    </div>
                                    <div className="card-content">
                                    </div>
                                    <div className="card-action">
                                        <a href="https://www.youtube.com/">Check It Out!</a>
                                    </div>
                                </div>
                            </div>


                </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src={car2} alt={"James Harden"}/></div>
                </div>


                <div className="section blue">
                    <div className="row container">

                        <div className="col s6">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img src={photo3} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col s6 RussoOne center-align">
                            <h2 className="header">About Me</h2>
                            <p className="grey-text text-darken-3 lighten-3">I have recently graduated from Pennsylvania State University with a Bachelors in Computer Science. While attending Penn State, I was able to gain an abundance of development knowledge while primarily using Java and C++. I had the opportunity to be placed as the Project Manager of my capstone project group as well as the teams Lead Developer. The project was an Android and React application called The Patient Monitoring System (https://promotionalweb.web.app/). </p>
                            <p className="grey-text text-darken-3 lighten-3">I previously worked at the Penn State Harrisburg IT Service desk for 2 years, and not Im currently working at CSC (Corporation Services Company) as a Desktop Support Intern.</p>
                            <p className="grey-text text-darken-3 lighten-3">I'm currently looking for Development positions.</p>
                        </div>
                    </div>
                </div>


                <div className="parallax-container">
                <div className="parallax"><img src={snow} alt=""/></div>
            </div>

                <div className="section RussoOne">
                    <div className="row container">
                        <div className="col s12 ">
                            <h2 className="header">Skills</h2>
                            <p className="grey-text text-darken-3 lighten-3">Listed are some of the development skills I've picked up over the years</p>

                            <ul className="collection grey">
                                <li className="collection-item">Java (4 years)</li>
                                <li className="collection-item">C++ (2 years)</li>
                                <li className="collection-item">Database Management - SQL/Firebase/Room (2 year)</li>
                                <li className="collection-item">Web Development – React, JavaScript, HTML (2 years)</li>
                                <li className="collection-item">Mobile Development – Android, Android Studio (2 year)</li>
                                <li className="collection-item">.NET (2 months)</li>
                                <li className="collection-item">MIPS – Assembly Language (2 year)</li>

                            </ul>

                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src={ball} alt=""/></div>
                </div>

                <div className="section blue RussoOne">
                    <div className="row container">
                        <div className="col s12 ">
                            <h2 className="header">Hobbies</h2>
                            {/*<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background*/}
                            {/*    content or image in this case, is moved at a different speed than the foreground content*/}
                            {/*    while scrolling.</p>*/}

                            <h4 className="light">Coming Soon......</h4>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>


                <footer className="page-footer black RussoOne">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12 ">
                                <h5 className="white-text">Is that it?....</h5>
                                <p className="grey-text text-lighten-4">Check out the blog!</p>
                                <p className="grey-text text-lighten-4">Send me a message!</p>
                            </div>
                            <div className="col l4 offset-l2 s12 center-align">
                                <h5 className="white-text">Back To Top</h5>
                                <button onClick={this.executeScroll} className="waves-effect waves-light btn-large RussoOne"><i className="material-icons left">arrow_upward</i>Scroll Up</button>

                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        );
    }
}

export default MainPage;
