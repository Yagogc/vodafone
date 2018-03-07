import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery'
import BuyingControls from './BuyingControls';

class Phone extends Component {
	render() {
		const {data} = this.props;
		return (
			<PhoneWrapper>
			{console.log(data)}
				<Gallery data={data} />
				<BuyingControls data={data}/>
			</PhoneWrapper>
		);
	}
}

export default Phone;

const PhoneWrapper = styled.div`
	max-width: 600px;
	width: 100%;
	background: white;
	box-shadow: 0 2px 5px rgba(0,0,0,.26);
	margin: 30px;
	padding: 15px;
	display: flex;
`