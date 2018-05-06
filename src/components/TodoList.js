import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			<ul> <Todo list={props.list} remove={props.remove} /> </ul>
		</div>
	)
}


export default TodoList;