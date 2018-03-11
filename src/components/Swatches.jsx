import React, {Component} from 'react';

import styled from 'styled-components';

import {ColourOption, SizeOption} from './Options';

class Swatches extends Component {

	render() {
		const {model, colours, sizes} = this.props.device;
		const {setColour, setSize} = this.props;
		
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
}

export default Swatches;

const SwatchWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 25px;
`
const SwatchLabel = styled.p`
	font-size: 14px;
	
	> span {
		font-weight: bold;
	}
`
const SwatchContainer = styled.div`
	display: inline-block;
	width: 50%;
`
