import React, { Component } from 'react';
import styled from 'styled-components'


class Gallery extends Component {
	render() { 
		const {device} = this.props;
		return (
			<GalleryWrapper>
				<Img
					src={device.imgPath}
					alt={device.displayName}
					title={device.displayName}
				/>
			</GalleryWrapper>
		)
	}
}

export default Gallery;

const GalleryWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	width: 50%;
`

const Img = styled.img`
	width: auto;
	height: 350px;
`