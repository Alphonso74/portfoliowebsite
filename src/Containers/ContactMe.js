import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";

class ContactMe extends Component {

    componentDidMount() {
        // console.log("Poop");
    }


    state = {
        first_name: 'efwewf',
        last_name: 'fwfwf',
        message: 'fwefw'


    };

    sendEmail = () => {
        // window.event.preventDefault()
        // console.log("poop");
        // window.Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "alphonso6809@gmail.com",
        //     Password : "75F92C9087A4CD9D090BC0B701DCF9EE7F9F",
        //     To : 'alphonso6809@gmail.com',
        //     From : "alphonso6809@gmail.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        //
        // }).then(
        //     message => alert(message)
        // );

        const templateParams = {
            from_name: 'Alphonso Big D Man',
            message: 'Wazzzzuuuppppp!'
        };

        window.emailjs.send('service_uhk71fn', 'template_2j2v7a4', templateParams, 'user_rlThFHOxD9FMHRy5Os1E1') //use your Service ID and Template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

    };

    render() {

        return (


            <div>

                <Navbar/>

                <div className="section grey RussoOne">
                    <div className="row container center-align">
                        <div className="col s12 ">
                            <h2 className="header">Contact Me</h2>
                            <p className="grey-text text-darken-3 lighten-3">If you want to get in touch with me send me a message!</p>
                            <p className="grey-text text-darken-3 lighten-3">This will go directly to my email, and I will get back in touch with you.</p>


                        </div>
                    </div>


                </div>
                    <div className="row RussoOne">
                        <form className="col s12 center-align" onSubmit={this.sendEmail}>
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
                                    <textarea id="message" className="validate materialize-textarea"/>
                                        <label htmlFor="message">Message</label>
                                </div>
                            </div>

                            <button className="RussoOne waves-effect waves-light btn-large"><i
                                className="material-icons right">send</i>Submit</button>

                        </form>
                    </div>



            </div>
        );
    }
}

export default ContactMe;
