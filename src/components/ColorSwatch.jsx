import React, {Component} from 'react';
import ColourOption from './ColourOption';
import SizeOption from './SizeOption';

class ColourSwatch extends Component {

	render() {
		const {defaultDevice, colours, sizes} = this.props.device;
		return (
			<div>
				<div>
					{colours.map(colour => {
						return <ColourOption 
						colour={colour} 
						key={colour}
						isChecked={defaultDevice.colour === colour}/>
					})}
				</div>
				<div>
					{sizes.map(size => {
						return <SizeOption 
						size={size} 
						key={size}
						isChecked={defaultDevice.memory === size}/>
					})}
				</div>
			</div>
		)
	}
}

export default ColourSwatch;