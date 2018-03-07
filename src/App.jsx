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
	height: 100vh;
	display:flex;
	align-items: center;
	justify-content: center;
	background: #f1f1f1;
`