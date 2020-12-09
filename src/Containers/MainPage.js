import React, {Component} from 'react';
import Navbar from "../Components/UI/Navbar/Navbar";
class MainPage extends Component {

    componentDidMount() {
        // console.log("Poop");
    }

    render() {

        return (
            <div>

                <Navbar/>

                <h1>Main Page</h1>


            </div>
        );
    }
}

export default MainPage;
