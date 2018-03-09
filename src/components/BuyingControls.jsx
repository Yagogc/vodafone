import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';
import Description from '../ui/Description';
import Rating from './Rating';
import ColorSwatch from './ColorSwatch';


class BuyingControls extends Component {
	render() { 
		const {device, setColour, setSize} = this.props;
		console.log(device);
		return (
			<BuyingControlsWrapper>
				<Title>
					{device.deviceName}
				</Title>
				<Rating rate={device.deviceRating} />
				<Description>
					{device.model.displayDesc}
				</Description>
				<ColorSwatch
					device={device}
					setColour={setColour}
					setSize={setSize}
					/>
				<div>
					<div>from <span>£{device.model.hardwarePrice}</span> upfront cost</div>
					<div>When you pay <span>£{device.model.bundlePrice}</span> month</div>
				</div>
			</BuyingControlsWrapper>
		)
	}
}

export default BuyingControls;

const BuyingControlsWrapper = styled.div`
	flex-grow: 1;
`