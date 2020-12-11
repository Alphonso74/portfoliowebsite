import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
class ContactMe extends Component {

    componentDidMount() {
        // console.log("Poop");
    }

    render() {

        return (
            <div>

                <Navbar/>

                <div className="section grey">
                    <div className="row container center-align">
                        <div className="col s12 ">
                            <h2 className="header">Contact Me</h2>
                            <p className="grey-text text-darken-3 lighten-3">If you want to get in touch with me send me a message!</p>
                            <p className="grey-text text-darken-3 lighten-3">This will go directly to my email, and I will get back in touch with you.</p>


                        </div>
                    </div>


                </div>
                    <div className="row">
                        <form className="col s12 center-align">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                        <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"/>
                                        <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"/>
                                        <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="message" type="text" className="validate materialize-textarea"/>
                                        <label htmlFor="message">Message</label>
                                </div>
                            </div>

                            <a className="waves-effect waves-light btn-large"><i
                                className="material-icons right">send</i>Submit</a>

                        </form>
                    </div>



            </div>
        );
    }
}

export default ContactMe;
