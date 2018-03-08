import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';
import Description from '../ui/Description';
import Rating from './Rating';


class BuyingControls extends Component {
	render() { 
		const {data} = this.props;
		return (
			<BuyingControlsWrapper>
				<Title>
					{data.groupName}
				</Title>
				<Rating rate={data.rating} />
				<Description>{data.deviceSummary[0].displayDescription}</Description>
				<div>
					Swatches
					<div>Color</div>
					<div>Size</div>
				</div>
				<div>Price</div>
			</BuyingControlsWrapper>
		)
	}
}

export default BuyingControls;

const BuyingControlsWrapper = styled.div`
	flex-grow: 1;
`