import React from 'react';
import Preview from './Preview.js'
import axios from 'axios';
import Header from './Header';

class App extends React.Component{
	state = {
		pageHeader: 'Expression',
		contests: []
	};
	componentDidMount(){
		axios.get('/api/contests')
			.then(resp => {
				this.setState({
			contests: resp.data.contests
		});
			})
			.catch(console.error)
	}
	render(){
		return(
		<div className = "App">
			<Header message = {this.state.pageHeader} /> 
			<div>
				{this.state.contests.map(contest =>
					<Preview key = {contest.id} {...contest} />
				)}
				
			</div>
		</div>
		);
	}
}

export default App;