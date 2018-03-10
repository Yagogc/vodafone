import React, { Component } from 'react';
import styled from 'styled-components';
class SizeOption extends Component {
	state = {}
	render() {
		const {size, isChecked, setSize} = this.props;
		return (
			<React.Fragment>
				<Input 
					type="radio" 
					id={size}
					name="size" 
					value={size}
					defaultChecked={isChecked}
					onClick={() => {setSize(size)}}  />
				<label htmlFor={size}>
					{size}
				</label>
			</React.Fragment>
		)
	}
}

export default SizeOption;

const Input = styled.input`
	/* display:none */
`