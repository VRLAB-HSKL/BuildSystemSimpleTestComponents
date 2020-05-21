import React, {Component} from "react";
import MenuBar from './components/MenuBar'
import Navigation from "./components/Navigation";


class VRLabApp extends Component {

    render() {
        return (
            <div>
                {/*<Navigation />*/}
                <MenuBar />
            </div>
        )
    }
}

export default VRLabApp;