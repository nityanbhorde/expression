import React from 'react';
import Header from './Header';
import ContestList from './ExpList';
import Exp from './Exp';
import * as api from '../api';
const pushState = (obj,url) =>
	window.history.pushState(obj, '', url);

const onPopState = handler =>{
		window.onpopstate = handler;
	}

class App extends React.Component{
	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	}
	state = this.props.initialData;
	componentDidMount(){
		onPopState((event) =>{
			this.setState({
				currentId: (event.state || {}).currentId
			})
		})
	}
	pageHeader(){
		if(this.state.currentId){
			return this.cc().contestName;
		}
		return 'Expression';
	}
	fetchExp = (expId) =>{
		pushState(
			{currentId: expId},
			`/contest/${expId}`
		);
		// look up page
		//this.state.contests[contestId]
		api.fetchExp(expId).then(contest => {
			this.setState({
			currentId : contest.id,
			contests: {
				...this.state.contests,
				[contest.id]: contest
			}
		});
		})
		
	};
	fetchExpList = () =>{
		pushState(
			{currentId: null},
			`/`
		);
		api.fetchExpList().then(contests => {
			this.setState({
				currentId : null,
				contests
		});
		})
		
	};
	cc(){
		return this.state.contests[this.state.currentId]
	}
	currentContent(){
		if(this.state.currentId){
			return <Exp 
			expListClick={this.fetchExpList}
			{...this.cc()}/>
		}

		return <ContestList 
				onExpClick={this.fetchExp}
				contests={this.state.contests} />;	}
	render() {
		return (
		<div className = "App">
			<Header message = {this.pageHeader()} /> 
			{this.currentContent()}
		</div>
		);
	}
}

export default App;