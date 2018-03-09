import React, {Component} from 'react';
import ColourOption from './ColourOption';
import SizeOption from './SizeOption';

class ColourSwatch extends Component {

	render() {
		const {model, colours, sizes} = this.props.device;
		const {setColour, setSize} = this.props;
		return (
			<div>
				<div>
					{colours.map(colour => {
						return <ColourOption 
						colour={colour} 
						key={colour}
						isChecked={model.colour === colour}
						setColour={setColour}/>
					})}
				</div>
				<div>
					{sizes.map(size => {
						return <SizeOption 
						size={size} 
						key={size}
						isChecked={model.memory === size}
						setSize={setSize}/>
					})}
				</div>
			</div>
		)
	}
}

export default ColourSwatch;