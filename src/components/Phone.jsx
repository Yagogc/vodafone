import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery'
import BuyingControls from './BuyingControls';

class Phone extends Component {

	state = {
		defaultDevice: {
			id: '',
			colour: '',
			memory: ''
		},
		colours: [],
		sizes: [],
	}

	componentWillMount() {
		const {data} = this.props;
		
		let colours = this.state.colours;
		data.deviceSummary.map( device => {
			if (!colours.includes(device.colourName)) {
				colours.push(device.colourName);
			}
		});
		
		let sizes = this.state.sizes;
		data.deviceSummary.map( device => {
			if (!sizes.includes(device.memory)) {
				sizes.push(device.memory);
			}
		});
		console.log(colours,sizes)
		this.setState({
			defaultDevice: {
				id: data.deviceSummary[0].deviceId,
				colour: data.deviceSummary[0].colourName,
				memory: data.deviceSummary[0].memory,
			},
			colours: colours,
			sizes: sizes,
		});
		console.log(this.state)

	}

	render() {
		const {data} = this.props;
		console.log(data);
		return (
			<PhoneWrapper>
			{console.log(data)}
				<Gallery data={data} />
				<BuyingControls
					data={data}
					device={this.state}/>
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