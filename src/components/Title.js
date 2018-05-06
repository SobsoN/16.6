import React from 'react';
const Title = (props) => (
	<div>
		<h1> TO DO LIST </h1>
		<h2> Current Things To Do {props.data.length}</h2>
	</div>
	);
export default Title;