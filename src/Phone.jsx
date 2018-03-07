import React, { Component } from 'react';

import styled from 'styled-components';


class Phone extends Component {
	render() {
		return (
		<PhoneWrapper>
			<div>
				Gallery
			</div>
			<div>
				Buying Controls
				<div>Product Name</div>
				<div>Product Rating</div>
				<div>Product Description</div>
				<div>
					Swatches
					<div>Color</div>
					<div>Size</div>
				</div>
				<div>Price</div>
			</div>
		</PhoneWrapper>
		);
	}
}

export default Phone;


const PhoneWrapper = styled.div`
	max-width: 600px;
	width: 100%;
	background: white;
`