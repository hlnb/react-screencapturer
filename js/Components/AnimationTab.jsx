import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import {TAB_BUTTON_STYLE} from "../Constants";

export default class AnimationTab extends Component {

  render(){
    onRecord = () => {
		const { states } = this.props;
		this.props.actions.toggleRecording(true);
	};

	onStop = () => {
		this.props.actions.toggleRecording(false);
	};

	onFilenameChange = e => {
		const { value } = e.target;
		const { actions } = this.props;
		if (!value.endsWith('.webm') || value.length < 7) {
			actions.setAnimationInputError('File name cannot be empty and must end with .png');
			return;
		}
		actions.setAnimationInputError('');
		actions.setAnimationFilename(value);
	}; 

    return <div className="tab-layout">
			<div className="tab-layout__item">
				<TextField onChange={this.onFilenameChange} floatingLabelText="File name pattern" defaultValue={ANIMATION_DEFAULT_FILENAME} errorText={states.animationInputError} />
			</div>
			<div className="tab-layout__item">
				{true ? <IconButton onClick={this.onStop} tooltip="Stop recording" iconClassName="material-icons" iconStyle={TAB_BUTTON_STYLE}>
						videocam_off
					</IconButton> : <IconButton onClick={this.onRecord} tooltip="Start recording" iconClassName="material-icons" iconStyle={TAB_BUTTON_STYLE}>
						videocam
					</IconButton>}
			</div>
		</div>;
  }
}
