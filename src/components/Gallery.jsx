import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Gallery = (props) => {
	const {device} = props;
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

export default Gallery;

Gallery.propTypes = {
	device: PropTypes.object.isRequired,
}

const GalleryWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 50%;
`

const Img = styled.img`
	width: auto;
	height: 350px;
`