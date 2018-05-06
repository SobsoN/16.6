import React from 'react';
import Todo from './Todo';

// const TodoList = (props) => {
// 	return (
// 		<div>
// 			<ul> 
// 				props.list.map(element =>
// 					<Todo name={element.text} id={element.id} remove={props.remove.bind(this)} />
// 				)
// 			</ul>
// 		</div>
// 	)
// }

const TodoList = props => {
  const todoListElements = props.list.map(element => 
    <Todo id={element.id} remove={props.remove.bind(this)} name={element.text} />)
    return (
      <ul>{todoListElements}</ul>
    )
}

export default TodoList;