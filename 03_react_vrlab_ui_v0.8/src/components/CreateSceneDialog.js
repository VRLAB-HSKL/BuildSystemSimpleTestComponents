import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class CreateSceneDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            viu: false,
            gvr: false,
            wave: false,
            sceneName: ''
        }
    }

    toggleDialog = () => {
        this.setState(prevState => {
            return {open: !prevState.open}
        });
    };

    handleSave = () => {
        let sceneObj = {
            sceneName: this.state.sceneName,
            viu: this.state.viu,
            gvr: this.state.gvr,
            wave: this.state.wave
        }
        this.props.saveScene(sceneObj);
        this.setState({
            viu: false,
            gvr: false,
            wave: false,
            sceneName: ''})
        this.toggleDialog();
    };

    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === 'checkbox' ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    };

    render() {

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.toggleDialog}>
                    Create new Scene
                </Button>
                <Dialog open={this.state.open} onClose={this.toggleDialog} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create new Scene</DialogTitle>
                    <DialogContent>
                        <DialogContentText/>
                        <TextField onChange={this.handleChange}
                                   autoFocus
                                   margin="dense"
                                   id="sceneName"
                                   label="Create new Scene"
                                   fullWidth
                                   name='sceneName'
                        />
                        <br/>
                        <br/>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Assign Assets</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.viu} onChange={this.handleChange}
                                                       name="viu"/>}
                                    label="Vive Input Utility"
                                    type='checkbox'
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.gvr} onChange={this.handleChange}
                                                       name="gvr"/>}
                                    label="Google VR"
                                    type='checkbox'
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={this.state.wave} onChange={this.handleChange}
                                                       name="wave"/>}
                                    label="Wave SDK"
                                    type='checkbox'
                                />
                            </FormGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toggleDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CreateSceneDialog;