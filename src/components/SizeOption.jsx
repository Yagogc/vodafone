import React, { Component } from 'react';

class SizeOption extends Component {
	state = {}
	render() {
		const {size, isChecked} = this.props;
		return (
			<React.Fragment>
				<input 
					type="radio" 
					id={size}
					name="size" 
					value={size}
					defaultChecked={isChecked} />
				<label htmlFor={size}>
					{size}
				</label>
			</React.Fragment>
		)
	}
}

export default SizeOption;