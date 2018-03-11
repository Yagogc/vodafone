import React, { Component } from 'react';
import styled from 'styled-components';

import Phone from './components/Phone';

import phones from './phones'


class App extends Component {
	render() {
		return (
			<Container>
				{phones.map((phone, i)=> (
					<Phone data={phone} key={i} />
				))}
			</Container>
		);
	}
}

export default App;


const Container = styled.div`
	min-height: 100vh;
	height: 100%;
	display:flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`