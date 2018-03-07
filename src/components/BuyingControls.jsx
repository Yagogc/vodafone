import React, { Component } from 'react';

class BuyingControls extends Component {
	render() { 
		const {data} = this.props;
		return (
			<div>
				<div>{data.groupName}</div>
				<div>{data.rating}</div>
				<div>Product Description</div>
				<div>
					Swatches
					<div>Color</div>
					<div>Size</div>
				</div>
				<div>Price</div>
			</div>
		)
	}
}

export default BuyingControls;