import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';
import Description from '../ui/Description';
import Rating from './Rating';
import ColorSwatch from './ColorSwatch';


class BuyingControls extends Component {
	render() { 
		const {data, device} = this.props;
		console.log(device);
		return (
			<BuyingControlsWrapper>
				<Title>
					{data.groupName}
				</Title>
				<Rating rate={data.rating} />
				<Description>
					{data.deviceSummary[0].displayDescription}
				</Description>
				<ColorSwatch device={device}/>
				<div>Price</div>
			</BuyingControlsWrapper>
		)
	}
}

export default BuyingControls;

const BuyingControlsWrapper = styled.div`
	flex-grow: 1;
`