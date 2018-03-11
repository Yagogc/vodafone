import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SizeOption = (props) =>{
	const {size, isChecked, setSize} = props;
	return (
		<React.Fragment>
			<Input 
				type="radio" 
				id={size}
				name="size" 
				value={size}
				defaultChecked={isChecked}
				onClick={() => {setSize(size)}}  />
			<Label
				htmlFor={size}
				isChecked={isChecked}>
				{size.replace(/\D/g,'')}
			</Label>
		</React.Fragment>
	)
}

export const ColourOption = (props) => {
	const {colour, colourHex, isChecked, setColour} = props;
	return (
		<React.Fragment>
			<Input 
				type="radio" 
				id={colour}
				name="colour" 
				value={colour}
				defaultChecked={isChecked}
				onClick={() => {setColour(colour)}} />
			<Label
				htmlFor={colour}
				colourHex={colourHex}
				isChecked={isChecked}
				>
			</Label>
		</React.Fragment>
	)
}

ColourOption.propTypes = {
	colour: PropTypes.string.isRequired,
	colourHex: PropTypes.string.isRequired,
	isChecked: PropTypes.bool.isRequired,
	setColour: PropTypes.func.isRequired,
}

SizeOption.propTypes = {
	size: PropTypes.string.isRequired,
	isChecked: PropTypes.bool.isRequired,
	setSize: PropTypes.func.isRequired,
}

const Label = styled.label`
	background-color: ${props => props.colourHex ? props.colourHex : '#f3f4f1' }
	width: 40px;
	height: 40px;
	border-radius: 5px;
	display: inline-block;
	border: 2px solid #e3e3e3;
	margin: 5px;
	transition: all 0.2s ease-in-out;
	text-align: center;
	line-height: 40px;
	position: relative;
	cursor: pointer;
	box-shadow: ${props => props.isChecked ? '0 0 0 2px white, 0 0 0 4px rgba(99,152,156,1)' : '0 0 0 0 white' };

	
	&:hover {
		box-shadow: ${props => props.isChecked ? '0 0 0 2px white, 0 0 0 4px rgba(99,152,156,1)' : '0 0 0 2px white, 0 0 0 4px rgba(99,152,156,0.5)' };
	}

	&:after {
		content: '';
		display: ${props => props.colourHex ? 'block' : 'none' }
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 5px;
		background: linear-gradient(to bottom, rgba(255,255,255,0.25) 0%,rgba(128,128,128,0) 50%,rgba(0,0,0,0.25) 100%);
		top: 0;
		left: 0;
	}
`

const Input = styled.input`
	display: none;
`