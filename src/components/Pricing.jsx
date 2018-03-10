import React, { Component } from 'react';
import styled from 'styled-components'

class Pricing extends Component {
	render() { 
		const {monthlyPrice, fullPrice} = this.props;
		return (
			<PricingWrapper>
				<div>from <span>£{fullPrice}</span> upfront cost</div>
				<div>When you pay <span>£{monthlyPrice}</span> month</div>
			</PricingWrapper>
		)
	}
}

export default Pricing;

const PricingWrapper = styled.div`
	background: #f4f4f4;
	display:flex;

	> div {
		display: inline-block;
		flex-grow: 1;
		padding: 20px;
		text-align: center;

		> span {
			color: #cf1710;
			font-weight: bold;
			font-size: 20px;
		}
	}
`