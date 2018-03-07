import React, { Component } from 'react';
import styled from 'styled-components'

import Title from '../ui/Title';


class BuyingControls extends Component {
	render() { 
		const {data} = this.props;
		return (
			<BuyingControlsWrapper>
				<Title>
					{data.groupName}
				</Title>
				<div>⭐ {data.rating}</div>
				<div>Product Description</div>
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