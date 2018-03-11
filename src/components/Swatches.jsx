import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {ColourOption, SizeOption} from './Options';

const Swatches = (props) => {
	const {model, colours, sizes} = props.device;
	const {setColour, setSize} = props;
	
	return (
		<SwatchWrapper>
			<SwatchContainer>
				<SwatchLabel>Colour: <span>{model.colour}</span></SwatchLabel>
				{colours.map(colour => {
					return <ColourOption 
					colour={colour.colourName}
					colourHex={colour.colourHex}
					key={colour.colourName}
					isChecked={model.colour === colour.colourName}
					setColour={setColour}/>
				})}
			</SwatchContainer>
			<SwatchContainer>
				<SwatchLabel>Capacity: <span>{model.memory}</span></SwatchLabel>
				{sizes.map(size => {
					return <SizeOption 
					size={size} 
					key={size}
					isChecked={model.memory === size}
					setSize={setSize}/>
				})}
			</SwatchContainer>
		</SwatchWrapper>
	)
}


export default Swatches;

Swatches.propTypes = {
	device: PropTypes.object.isRequired,
	setColour: PropTypes.func.isRequired,
	setSize: PropTypes.func.isRequired,
}

const SwatchWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 25px;
`
const SwatchLabel = styled.p`
	font-size: 14px;
	margin-bottom: 10px;
	flex: 1;
	width: 100%;
	
	> span {
		font-weight: bold;
	}
`
const SwatchContainer = styled.div`
	display: block;
	flex-grow: 1;
	min-width: 50%;
	margin-bottom: 10px;
`