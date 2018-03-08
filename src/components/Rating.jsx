import React, { Component } from 'react';
import styled from 'styled-components';

class Rating extends Component {
	render() {
		const {rate} = this.props;
		return (
			<RatingWrapper>
				{Array.apply(null, { length: Math.round(rate) }).map((e, i) => (
					<Star key={i} />
				))}
			</RatingWrapper>
		)
	}
}

const Star = () => {
	return <span role='img' aria-label="star">⭐</span>
}

export default Rating;

const RatingWrapper = styled.div`
	margin-bottom: 10px;
`