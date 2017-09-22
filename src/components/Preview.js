import React from 'react';

const Preview = (contest) => (
	<div className = "Preview">
		<div className= "category-name">
			{contest.categoryName}
		 </div>
		 <div className ="contest-name">
		 	{contest.contestName}
		 </div>
			
	</div>

	);

export default Preview;