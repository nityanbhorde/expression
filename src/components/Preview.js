import React from 'react';

class Preview extends React.Component{
	// handles clicking
	handleClick = () =>{
		this.props.onClick(this.props.id)
	};
	render(){
		return(
			<div className="link Preview" onClick={this.handleClick}>
				<div className= "category-name">
					{this.props.categoryName}
			 	</div>
		 		<div className="contest-name">
		 			{this.props.contestName}
		 		</div>
			</div>
		)
	}
}

Preview.propTypes = {
	id: React.PropTypes.number.isRequired,
	categoryName: React.PropTypes.string.isRequired,
	contestName: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired
};

export default Preview;