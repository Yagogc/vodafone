import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Pricing = (props) => {
	const {monthlyPrice, fullPrice} = props;
	return (
		<PricingWrapper>
			<div>from <span>£{fullPrice}</span> upfront cost</div>
			<div>When you pay <span>£{monthlyPrice}</span> a month</div>
		</PricingWrapper>
	)
}

export default Pricing;

Pricing.propTypes = {
	monthlyPrice: PropTypes.string.isRequired,
	fullPrice: PropTypes.string.isRequired,
}

const PricingWrapper = styled.div`
	background: #f4f4f4;
	display:flex;

	> div {
		display: inline-block;
		flex-grow: 1;
		min-width: 50%;
		padding: 20px;
		position: relative;

		&:first-child:after {
			content: '';
			position: absolute;
			display: block
			height: 60%;
			width: 1px;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			background: #ddd;
		}

		> span {
			color: #cf1710;
			font-weight: bold;
			font-size: 20px;
		}
	}
`