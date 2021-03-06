import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
import car2 from '../asset/car2.jpg';
import snow from '../asset/snow2.jpg';
import ball from '../asset/ball.jpg';
// import alphonso from '../asset/jamesHarden.jpg';
import './MainPageCSS.css';
import github from '../asset/github.jpeg';
import linkedIn from '../asset/linkedIn.jpg';
import youtube from '../asset/youtube.png'
import photo3 from '../asset/newpic1.jpg';
import M from 'materialize-css/dist/js/materialize.min';
import './MainPageCSS.css';
import {Redirect} from "react-router-dom";

class MainPage extends Component {

    componentDidMount() {
        // console.log("Poop");


            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});


    }

    executeScroll = () => window.scrollTo({

        top: 0,
        behavior: "smooth"});

    // Github = () => {
    //
    //     return <Redirect to="https://github.com/Alphonso74"/>
    // }

    render() {

        document.addEventListener("visibilitychange", function() {
            console.log( document.visibilityState );
            // Modify behavior...
        })
        return (
            <body>

                <header>
                <Navbar />
                </header>





                <main>
                    <div className="grey">
                <div className="section ">
                    <div className="row container center-align">
                        <div className="col s12  ">

                            <h2 className="header RussoOne">Welcome To My Website</h2>
                            <h5 className="grey-text text-darken-3 lighten-3 RussoOne">Take a look around!</h5>

        {/*                    <h4 className="light RussoOne">My Links</h4>*/}
        {/*                    <pre><code className="language-markup col s12">*/}
        {/*</code></pre>*/}
                        </div>
                    </div>
                </div>


                <div className="section ">
                    <div className="col  container">

                        {/*<h1 className=" row s12 RussoOne center-align">About Me</h1>*/}

                        <div className="col s12 RussoOne">
                            <div className="col s4 ">

                                <img className="circle responsive-img" src={photo3} alt=""/>

                            </div>


                            <div className="col s8 RussoOne center-align ">
                                <h1 className=" row s12 RussoOne center-align">About Me</h1>


                                <p className=" text-darken-3">Home: Ellicott City, Maryland</p>
                                <p className=" text-darken-3 ">Education: Pennsylvania State University</p>
                                <p className=" text-darken-3 ">Bachelors Degree: Computer Science</p>
                                <p className=" text-darken-3 ">Hi! I'm a recent Computer Science graduate from Penn State University, and an incoming Software Engineer at Accenture Federal Services.</p>

                                <p className=" text-darken-3 ">If your looking for someone to develop an Android or web application for you LOOK NO FURTHER.</p>
                                <p className=" text-darken-3 ">Send me a message through the contact page.</p>


                            </div>

                        </div>
                    </div>


                </div>
                    </div>




        {/*            <div className="row center RussoOne">*/}
        {/*                <div className="col s4 ">*/}
        {/*                    <div className="card  hoverable">*/}
        {/*                        <div className="card-image">*/}
        {/*                            <img src={github} alt=""/>*/}
        {/*                        </div>*/}
        {/*                        <div className="card-content center-align">*/}
        {/*                            <a  href="https://github.com/Alphonso74">My Projects!</a>*/}

        {/*                        </div>*/}

        {/*                    </div>*/}
        {/*                </div>*/}



        {/*                <div className="col s4 ">*/}
        {/*                    <div className="card  hoverable">*/}
        {/*                        <div className="card-image">*/}
        {/*                            <img src={linkedIn} alt=""/>*/}
        {/*                        </div>*/}
        {/*                        <div className="card-content center-align">*/}
        {/*                            <a className="center-align" href="https://www.linkedin.com/in/alphonso-mckenzie-a32440189/">Lets Connect!</a>*/}

        {/*                        </div>*/}

        {/*                    </div>*/}
        {/*                </div>*/}



        {/*                    <div className="col s4">*/}
        {/*                        <div className="card  hoverable">*/}
        {/*                            <div className="card-image">*/}
        {/*                                <img src={youtube} alt=""/>*/}
        {/*                            </div>*/}
        {/*                            <div className="card-content center-align">*/}
        {/*                                <a className="center-align" href="https://www.youtube.com/">My Videos!</a>*/}

        {/*                            </div>*/}

        {/*                        </div>*/}
        {/*                    </div>*/}


        {/*        </div>*/}
        {/*        </div>*/}

                <div className="parallax-container ">
                    <div className="parallax "><img src={car2} alt={"James Harden"}/></div>
                </div>


                {/*<div className="section blue">*/}
                {/*    <div className="col  container">*/}

                {/*        <h1 className=" row s12 RussoOne center-align">About Me</h1>*/}

                {/*        <div className="row s12 RussoOne">*/}
                {/*            <div className="col s6 ">*/}

                {/*                    <img className="circle responsive-img" src={photo3} alt=""/>*/}

                {/*            </div>*/}


                {/*        <div className="col s6 RussoOne center-align">*/}


                {/*            <p className="grey-text text-darken-3 lighten-3">Hi! I'm a recent Computer Science graduate from Penn State University, and an incoming Software Engineer at Accenture Federal Services.</p>*/}
                {/*            <p className="grey-text text-darken-3 lighten-3">Home: Ellicott City, Maryland</p>*/}
                {/*            <p className="grey-text text-darken-3 lighten-3">Education: Pennsylvania State University</p>*/}
                {/*            <p className="grey-text text-darken-3 lighten-3">Bachelors Degree: Computer Science</p>*/}
                {/*        </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}


                {/*</div>*/}


                <div className="section grey">
                    <div className="row container center-align">
                        <div className="col s12 ">



                            <h1 className="light RussoOne">My Links</h1>
                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>




                    <div className="row center RussoOne">

                        <div className="col s4 ">
                            <div className="card  hoverable" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://github.com/Alphonso74';
                            }}>
                                <div className="card-image">
                                    <img src={github} alt=""/>
                                </div>
                                <div className="card-content center-align">
                                    <a  href="https://github.com/Alphonso74">My Projects!</a>

                                </div>

                            </div>
                        </div>



                        <div className="col s4 ">
                            <div className="card  hoverable" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.linkedin.com/in/alphonso-mckenzie-a32440189/';
                            }}>
                                <div className="card-image">
                                    <img src={linkedIn} alt=""/>
                                </div>
                                <div className="card-content center-align">
                                    <a className="center-align" href="https://www.linkedin.com/in/alphonso-mckenzie-a32440189/">Lets Connect!</a>

                                </div>

                            </div>
                        </div>



                        <div className="col s4">
                            <div className="card  hoverable" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.youtube.com/playlist?list=PLW-hBvwtzj_6JMHwju6k46fW-G4k72AKp';
                            }}>
                                <div className="card-image">
                                    <img src={youtube} alt=""/>
                                </div>
                                <div className="card-content center-align">
                                    <a className="center-align" href="https://www.youtube.com/">My Videos!</a>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>





                <div className="parallax-container">
                <div className="parallax"><img src={snow} alt=""/></div>
            </div>

                <div className="section RussoOne grey">
                    <div className="row container">
                        <div className="col s12 ">
                            <h2 className="header">Skills</h2>
                            <p className="grey-text text-darken-3 lighten-3">Listed are some of the development skills I've picked up over the years</p>

                            <ul className="collection grey">
                                <li className="collection-item hoverable ">Java (4 years)</li>
                                <li className="collection-item hoverable">C++ (2 years)</li>
                                <li className="collection-item hoverable">Database Management - SQL/Firebase/Room (2 year)</li>
                                <li className="collection-item hoverable">Web Development – React, JavaScript, HTML (2 years)</li>
                                <li className="collection-item hoverable">Mobile Development – Android, Android Studio (2 year)</li>
                                <li className="collection-item hoverable">.NET (2 months)</li>
                                <li className="collection-item hoverable">MIPS – Assembly Language (2 year)</li>

                            </ul>

                            <pre><code className="language-markup col s12">
        </code></pre>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src={ball} alt=""/></div>
                </div>

                <div className="section red RussoOne">
                    <div className="row container">
                        <div className="col s12 ">
                            <h2 className="header">Hobbies</h2>
                            {/*<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background*/}
                            {/*    content or image in this case, is moved at a different speed than the foreground content*/}
                            {/*    while scrolling.</p>*/}

                            <div className="col s12 ">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                        <div className="col s4 center-align">
                                            <i className="material-icons medium">sports_basketball</i>
                                        </div>
                                        <div className="col s8 center-align">
              <span className="black-text">
                The game of Basketball has been near and dear to my heart from a very young age. This game has taught me many things, and has given me the opportunity to meet and see many people.
                  Basketball has taught me the greatest lesson of my entire life..."Practice Makes Perfect".
              </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 ">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                        <div className="col s4 center-align">
                                            <i className="material-icons medium">snowboarding</i>
                                        </div>
                                        <div className="col s8 center-align">
              <span className="black-text">
                One of my newest hobbies is Snowboarding and I LOVE IT. I love going to new resorts and testing my skills each time I'm on the mountain.
                  The 2020/2021 season is going to be one to remember.
              </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col s12 ">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                        <div className="col s4 center-align">
                                            <i className="material-icons medium">library_music</i>
                                        </div>
                                        <div className="col s8 center-align">
              <span className="black-text">
                Music is the first hobby/interest I can remember that I've ever sought to follow and involve myself in on my own.
                  I remember I was in 3rd or 4th grade when I told my parents I wanted to play a musical instrument. That single decision led me
                  to playing the violin for the next 6 years.
              </span>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="col s12 ">
                                <div className="card-panel grey lighten-5 z-depth-1">
                                    <div className="row valign-wrapper">
                                        <div className="col s4 center-align">
                                            <i className="material-icons medium">sports_esports</i>
                                        </div>
                                        <div className="col s8 center-align">
              <span className="black-text">
                I think the first gaming console I've ever owned was a Sega Dreamcast. I had a Looney Tunes game called Looney Tunes: Space Race.
                  I remember staying up all night at my grandmothers home in New York and playing it until I passed out. I have since owned a Xbox, Xbox 360,
                  Xbox One, Nintendo Wii, and a Playstation 2.
              </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </main>


                <footer className="page-footer black RussoOne">
                    <div className="container">
                        <div className="row">
                            <div className="col  s6 ">
                                <h5 className="white-text">Is that it?....</h5>
                                <p className="grey-text text-lighten-4">Check out the blog!</p>
                                <p className="grey-text text-lighten-4">Send me a message!</p>
                            </div>
                            <div className="col  s6 center-align">
                                <h5 className="white-text">Back To Top</h5>
                                <button onClick={this.executeScroll} className="waves-effect waves-light btn-large RussoOne grey hoverable ">To Top</button>

                            </div>
                        </div>
                    </div>


                </footer>

            </body>
        );
    }
}

export default MainPage;
