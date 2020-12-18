import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
import M from 'materialize-css/dist/js/materialize.min';

class ContactMe extends Component {


    state = {
        email: '',
        first_name: '',
        last_name: '',
        message: '',
        sentMessage: false,
        modal: null


    };


    componentDidMount() {
        // console.log("Poop");

            var elems = document.querySelectorAll('.modal');




    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // console.log(this.state.email);



    }



    emailChange = (event) => {

        this.setState({
            ...this.state,
            email: (event.target.value).trim()



        })


    }

    firstNameChange = (event) => {

        this.setState({
            ...this.state,
            first_name: (event.target.value).trim()



        })

    }

    lastNameChange = (event) => {

        this.setState({
            ...this.state,
            last_name: (event.target.value).trim()



        })

    }

    messageChange = (event) => {
        this.setState({
            ...this.state,
            message: (event.target.value).trim()


        })


    }

    sendEmail = () => {
        window.event.preventDefault();
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


            // console.log("test");



            const templateParams = {
                email: this.state.email,
                from_name: this.state.first_name + ' ' + this.state.last_name,
                message: this.state.message,
                reply_to: this.state.email
            };


            window.emailjs.send('service_uhk71fn', 'template_2j2v7a4', templateParams, 'user_rlThFHOxD9FMHRy5Os1E1') //use your Service ID and Template ID
                .then(function (response) {
                    const elem = document.getElementById('modal1');
                    const instance = M.Modal.init(elem, {dismissible: true});
                    instance.open();

                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById("formyform").reset();

                    // window.location.reload();
                }, function (error) {
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
                        <form className="col s12 center-align" id="formyform" onSubmit={this.sendEmail}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" required=" " className="validate" onChange={this.emailChange}/>
                                        <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" required=" " className="validate" onChange={this.firstNameChange}/>
                                        <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" required=" " onChange={this.lastNameChange}/>
                                        <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="message" className="validate materialize-textarea" required=" " onChange={this.messageChange}/>
                                        <label htmlFor="message">Message</label>
                                </div>
                            </div>

                            <button className="RussoOne waves-effect waves-light btn-large black"><i
                                className="material-icons right">send</i>Submit</button>

                        </form>
                    </div>


                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content center-align">
                        <h4>Thanks For The Message!</h4>
                        <p>This message will go directly to Alphonso, and he will contact you through the email provided.</p>
                        <p>Thanks!</p>
                        <i className="material-icons centerAlign">thumb_up</i>
                    </div>

                </div>



            </div>
        );
    }
}

export default ContactMe;
