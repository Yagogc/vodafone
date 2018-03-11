import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from './Gallery'
import BuyingControls from './BuyingControls';

class Phone extends Component {
	/**
	 * Initialize the state.
	 */
	state = {
		name: '',
		rating: '',
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

	/**
	 * When the component will get mounted
	 * it sets the default Phone.
	 */
	componentWillMount() {
		this.setDefaultPhone();
	}

	/**
	 * Sets the state with a default phone and a default model.
	 * Also defines all the available colours and sizes for the phone
	 */
	setDefaultPhone = () => {
		const {data} = this.props;
		
		let {colours} = this.state;
		data.deviceSummary.map( device => {
			if (!colours.find(colour => colour.colourName === device.colourName)) {
				colours.push({colourName: device.colourName, colourHex: device.colourHex});
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
			name: data.groupName,
			rating: data.rating,
			colours,
			sizes,
		});
		this.setModel(data.deviceSummary[0]);
	}

	/**
	 * Sets the default or selected model of the phone.
	 * @param {object} device
	 */
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
	}

	/**
	 * Sets model based on the colour selected by the user.
	 * @param {string} colour
	 */
	setModelByColour = (colour) => {
		const {data} = this.props;
		
		let deviceFiltered = data.deviceSummary.filter(device => device.colourName === colour && device.memory === this.state.model.memory);

		if (deviceFiltered[0]) {
			this.setModel(deviceFiltered[0])
		}
		
	}

	/**
	 * Sets model based on the size selected by the user.
	 * @param {string} size
	 */
	setModelBySize = (size) => {
		const {data} = this.props;
		
		let deviceFiltered = data.deviceSummary.filter(device => device.colourName === this.state.model.colour && device.memory === size);

		if (deviceFiltered[0]) {
			this.setModel(deviceFiltered[0])
		}
	}
	render() {
		return (
			<PhoneWrapper>
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

Phone.propTypes = {
	data: PropTypes.object.isRequired,
}


const PhoneWrapper = styled.div`
	max-width: 970px;
	width: 100%;
	background: white;
	box-shadow: 0 2px 5px rgba(0,0,0,.26);
	margin: 30px auto;
	padding: 25px;
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		margin-top: 0;
	}
`