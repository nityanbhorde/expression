import React, {Component, PropTypes} from 'react';

class Exp extends Component {
	render(){
		return (
			<div className="Expression">
				<div className="exp-description">
					{this.props.description}
				</div>
				<div className="home-link link"
						onClick={this.props.expListClick}>
					Expression
				</div>
			</div>
		);
	}
}

Exp.propTypes = {
	description: PropTypes.string.isRequired,
	expListClick: PropTypes.func.isRequired,
}

export default Exp;