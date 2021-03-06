import React, {Component} from 'react';
// import Navbar from "../Components/UI/Navbar/Navbar";
import M from 'materialize-css/dist/js/materialize.min';
// import photo from '../asset/alphonsopicture.jpg';
// import photo1 from '../asset/interview.jpg';
import photo2 from '../asset/newpic.jpg';
import photo3 from '../asset/newpic1.jpg';
import photo4 from '../asset/newpic2.jpg';
import {Link} from 'react-router-dom';

class LandingPage extends Component {

    state = { redirect: '/mainpage' };


    componentDidMount() {
        // console.log("Poop");

            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});

    }

    // navToHome = () => {
    //
    //     console.log(this.state.redirect);
    //    return <Redirect to={this.state.redirect}/>
    // };

    render() {

        return (


            <div className="slider fullscreen">
                <ul className="slides">
                    <li>
                        <img className="responsive-img" alt="image 1" src={photo3}/>
                            <div className="caption center-align">
                                <h2 className="black-text RussoOne">Welcome To My Website!</h2>
                                {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                                <Link to="/mainpage" className="waves-effect waves-light btn-large white black-text RussoOne hoverable"><i
                                    className="material-icons right">whatshot</i>Enter</Link>
                            </div>
                    </li>
                    {/*<li>*/}
                    {/*    <img*/}
                    {/*        alt=""*/}
                    {/*        src={photo2}/>*/}
                    {/*        <div className="caption left-align">*/}
                    {/*            <h3>Welcome To My Website!</h3>*/}

                    {/*            <Link to="/mainpage" className="waves-effect waves-light btn-large"><i*/}
                    {/*                className="material-icons right">whatshot</i>Enter</Link>*/}

                    {/*            /!*<h3>Left Aligned Caption</h3>*!/*/}
                    {/*            /!*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*!/*/}
                    {/*        </div>*/}
                    {/*</li>*/}
                    <li>
                        <img className="responsive-img" alt="image 2" src={photo4}/>
                            <div className="caption right-align">
                                <h2 className="black-text RussoOne">Welcome To My Website!</h2>

                                <Link to="/mainpage" className="waves-effect waves-light btn-large white black-text RussoOne hoverable"><i
                                    className="material-icons right">whatshot</i>Enter</Link>
                                {/*<h3>Right Aligned Caption</h3>*/}
                                {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                            </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LandingPage;
