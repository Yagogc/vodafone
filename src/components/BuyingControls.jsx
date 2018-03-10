import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';
import Description from '../ui/Description';
import Rating from './Rating';
import ColorSwatch from './ColorSwatch';
import Pricing from './Pricing';


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
				<Pricing
					monthlyPrice={device.model.bundlePrice}
					fullPrice={device.model.hardwarePrice}
				/>
			</BuyingControlsWrapper>
		)
	}
}

export default BuyingControls;

const BuyingControlsWrapper = styled.div`
	flex-grow: 1;
	width: 50%;
	display: flex;
	flex-direction: column;
`