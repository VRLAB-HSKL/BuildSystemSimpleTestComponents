import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateSceneDialog from "./CreateSceneDialog";

class SceneManagement extends Component {

    constructor() {
        super();
        this.state = {
            rows: [
                {sceneName: 'Test_Scene1', viu: true, gvr: false, wave: true},
                {sceneName: 'Test_Scene2', viu: false, gvr: true, wave: false},
                {sceneName: 'Test_Scene3', viu: true, gvr: false, wave: true},
                {sceneName: 'Test_Scene4', viu: false, gvr: true, wave: false},
                {sceneName: 'Test_Scene5', viu: true, gvr: false, wave: true},
            ]
        }

        this.saveScene = this.saveScene.bind(this);
    }

    saveScene(sceneObj) {
        this.setState(prevState => ({
            rows: [...prevState.rows, sceneObj]
        }))
    }

    render() {

        return (
            <>
                <TableContainer component={Paper}>
                    <Table style={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Scene Name</TableCell>
                                <TableCell align="right">VIU</TableCell>
                                <TableCell align="right">GVR</TableCell>
                                <TableCell align="right">WaveSDK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row) => (
                                <TableRow key={row.sceneName}>
                                    <TableCell component="th" scope="row">
                                        {row.sceneName}
                                    </TableCell>
                                    <TableCell align="right">{row.viu ? "yes" : "no"}</TableCell>
                                    <TableCell align="right">{row.gvr ? "yes" : "no"}</TableCell>
                                    <TableCell align="right">{row.wave ? "yes" : "no"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <CreateSceneDialog saveScene={this.saveScene}/>
                </div>

            </>
        )
    }
}

export default SceneManagement;