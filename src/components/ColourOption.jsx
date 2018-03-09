import React, { Component } from 'react';

class ColourOption extends Component {
	state = {}
	render() {
		const {colour, isChecked} = this.props;
		return (
			<React.Fragment>
				<input 
					type="radio" 
					id={colour}
					name="colour" 
					value={colour}
					defaultChecked={isChecked}/>
				<label htmlFor={colour}>
					{colour}
				</label>
			</React.Fragment>
		)
	}
}

export default ColourOption;