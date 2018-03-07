import React, { Component } from 'react';

import styled from 'styled-components';


class Phone extends Component {
	render() {
		return (
		<PhoneWrapper>
			Vodafone Test
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