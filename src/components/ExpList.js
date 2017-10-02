import React from 'react';
import Preview from './Preview';

const ContestList = ({ contests, onExpClick }) => (
	<div className = "ContestList">
		{Object.keys(contests).map(contestId =>
			<Preview 
			key = {contestId} 
			onClick={onExpClick}
		{...contests[contestId]} />
		)}
				
	</div>
);

ContestList.propTypes = {
	contests: React.PropTypes.object,
	onExpClick: React.PropTypes.func.isRequired,
};

export default ContestList;