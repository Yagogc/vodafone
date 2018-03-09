import React, { Component } from 'react';

class ColourOption extends Component {

	render() {
		const {colour, isChecked, setColour} = this.props;
		return (
			<React.Fragment>
				<input 
					type="radio" 
					id={colour}
					name="colour" 
					value={colour}
					defaultChecked={isChecked}
					onClick={() => {setColour(colour)}} />
				<label htmlFor={colour} >
					{colour}
				</label>
			</React.Fragment>
		)
	}
}

export default ColourOption;