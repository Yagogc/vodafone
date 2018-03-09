import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery'
import BuyingControls from './BuyingControls';

class Phone extends Component {

	state = {
		deviceName: '',
		deviceRating: '',
		model: {
			id: '',
			colour: '',
			memory: '',
			colourHex: '',
			displayDesc: '',
			displayName: '',
			imgPath: '',
			bundlePrice: '',
			hardwarePrice: '',
			colourSizes: [],
		},
		colours: [],
		sizes: [],
	}

	componentWillMount() {
		this.setDefaultModel();
	}

	setDefaultModel = () => {
		const {data} = this.props;
		
		let colours = this.state.colours;
		data.deviceSummary.map( device => {
			if (!colours.includes(device.colourName)) {
				colours.push(device.colourName);
			}
			return false;
		});
		
		let sizes = this.state.sizes;
		data.deviceSummary.map( device => {
			if (!sizes.includes(device.memory)) {
				sizes.push(device.memory);
			}
			return false;
		});
		this.setState({
			deviceName: data.groupName,
			deviceRating: data.rating,
			colours,
			sizes,
		});
		this.setModel(data.deviceSummary[0]);
	}

	setModel = (device) => {
		const {data} = this.props;
		
		let colourSizes = data.deviceSummary.filter(deviceFiltered => deviceFiltered.colourName === device.colourName);

		colourSizes = colourSizes.map(sizes => sizes.memory);
		
		this.setState((prevState) => {
			return {
				model: {
					id: device.deviceId,
					colour: device.colourName,
					memory: device.memory,
					colourHex: device.colourHex,
					displayDesc: device.displayDescription,
					displayName: device.displayName,
					imgPath: device.merchandisingMedia[0].value,
					bundlePrice: device.priceInfo.bundlePrice.monthlyPrice.gross,
					hardwarePrice: device.priceInfo.hardwarePrice.oneOffPrice.gross,
					colourSizes,
				}
			}
		});
		
		//this.setModelByColour("Gold");
	}

	setModelByColour = (colour) => {
		const {data} = this.props;
		console.log(colour);
		
		let deviceFiltered = data.deviceSummary.filter(device => device.colourName === colour);

		// console.log('deviceFiltered',deviceFiltered);
		// console.log('STATE MEMORY',this.state);
		// console.log('STATE MEMORY',this.state.model.memory);

		deviceFiltered = deviceFiltered.filter(device => device.memory === this.state.model.memory);
		// console.log('deviceFiltered',deviceFiltered);

		if (deviceFiltered[0]) {
			this.setModel(deviceFiltered[0])
		}
		
	}

	setModelBySize = (size) => {
		const {data} = this.props;
		console.log('size',size);
		
		let deviceFiltered = data.deviceSummary.filter(device => device.colourName === this.state.model.colour);

		// console.log('deviceFiltered',deviceFiltered);
		// console.log('STATE MEMORY',this.state);
		// console.log('STATE MEMORY',this.state.model.memory);

		deviceFiltered = deviceFiltered.filter(device => device.memory === size);
		// console.log('deviceFiltered',deviceFiltered);

		if (deviceFiltered[0]) {
			this.setModel(deviceFiltered[0])
		}
	}
	render() {
		const {data} = this.props;
		console.log(data);
		return (
			<PhoneWrapper>
			{console.log(data)}
				<Gallery device={this.state.model} />
				<BuyingControls
					device={this.state}
					setColour={this.setModelByColour}
					setSize={this.setModelBySize}
					/>
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