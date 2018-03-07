import React, { Component } from 'react';
import styled from 'styled-components'


class Gallery extends Component {
	render() { 
		const {data} = this.props;
		return (
			<GalleryWrapper>
				<Img
					src={data.deviceSummary[0].merchandisingMedia[0].value}
					alt={data.deviceSummary[0].displayName}
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
`

const Img = styled.img`
	width: auto;
	height: 350px;
`