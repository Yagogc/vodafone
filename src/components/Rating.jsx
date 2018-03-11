import React from 'react';
import styled from 'styled-components';

const Rating = (props) => {
	const {rate} = props;
	return (
		<RatingWrapper>
			{Array.apply(null, { length: Math.round(rate) }).map((e, i) => (
				<Star key={i} />
			))}
		</RatingWrapper>
	)
}

const Star = () => {
	return  (
		<Svg height="25" width="23">
			<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
		</Svg>
	)
}

export default Rating;

const RatingWrapper = styled.div`
	margin-bottom: 10px;
`
const Svg = styled.svg`
	fill: #ffd055;
`