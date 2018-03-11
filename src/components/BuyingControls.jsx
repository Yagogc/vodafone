import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';
import Description from '../ui/Description';
import Rating from './Rating';
import Swatches from './Swatches';
import Pricing from './Pricing';


class BuyingControls extends Component {
	render() { 
		const {device, setColour, setSize} = this.props;
		console.log(device);
		return (
			<BuyingControlsWrapper>
				<Title>
					{device.name}
				</Title>
				<Rating rate={device.rating} />
				<Description>
					{device.model.displayDesc}
				</Description>
				<Swatches
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