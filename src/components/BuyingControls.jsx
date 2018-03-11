import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Rating from './Rating';
import Swatches from './Swatches';
import Pricing from './Pricing';


const BuyingControls = (props) => {
	const {device, setColour, setSize} = props;
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

export default BuyingControls;

BuyingControls.propTypes = {
	device: PropTypes.object.isRequired,
	setColour: PropTypes.func.isRequired,
	setSize: PropTypes.func.isRequired,
}

const BuyingControlsWrapper = styled.div`
	flex-grow: 1;
	min-width: 50%;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`

const Description = styled.p`
	margin-bottom: 15px;
	font-size: 14px;
`

const Title = styled.h1`
	margin-bottom: 15px;
`