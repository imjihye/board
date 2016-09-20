'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


var placeholder = document.createElement('li');
placeholder.id='placeholder';

class Content extends React.Component{
	constructor(props){
		super(props);

		$.ajax({
            crossDomain: true,
            type:"GET",
            contentType: "application/json; charset=utf-8",
	      url: '../data.json',
	      dataType: 'json',
	      success: function(data) {
	      	console.log(data)
	        // this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });


		// this.state = {todo:[1,2,3,4,5], done:[1,2,3,4,5]};
	}
	dragStart(e){
		this.dragged = e.currentTarget;
		e.dataTransfer.effectAllowed='move';
		e.dataTransfer.setData('text/html', this.dragged);
	}
	dragEnd(e){
		this.dragged.style.display='list-item';
		var node = document.getElementById('placeholder');
		node.parentNode.removeChild(node);

		var draggedName = this.dragged.parentNode.dataset.name;
		var fromList = this.state[draggedName];
		var fromIndex = this.dragged.dataset.id;
		var item = fromList.splice(fromIndex, 1)[0];

		var overName = this.over.parentNode.dataset.name;
		var toList = this.state[overName];
		var toIndex = this.over.dataset.id;

		toList.splice(toIndex, 0, item);
		this.setState({draggedName:fromList, overName:toList});
	}
	dragOver(e){
		e.preventDefault();
		this.dragged.style.display='none';
		if(e.target.draggable){
			this.over = e.target;
			this.over.parentNode.insertBefore(placeholder, e.target);
		}
	}
	render(){
		return (
			<div onDragOver={this.dragOver.bind(this)}>
				<Button>Login!</Button>
				<List 
					name="todo"
					data={this.state.todo} 
					onDragStart={this.dragStart.bind(this)}
					onDragEnd={this.dragEnd.bind(this)}/>
				<List 
					name="done"
					data={this.state.done} 
					onDragStart={this.dragStart.bind(this)}
					onDragEnd={this.dragEnd.bind(this)}/>
			</div>
		);
	}
}

class List extends React.Component{
	constructor(props){
		super(...props);
		this.state = {...props};
	}
	dragStart(e){
		this.props.onDragStart(e);
	}
	dragEnd(e){
		this.props.onDragEnd(e);
	}
	render(){
		this.state = {...this.props};
		var listItems = this.state.data.map((value, index) => {
			return (<li 
						data-id={index}
						draggable="true"
						onDragStart={this.dragStart.bind(this)}
						onDragEnd={this.dragEnd.bind(this)}
						key={index}>{value}
					</li>);
		});
		return (
			<div className="list col-md-3">
				<h2>{this.state.name}</h2>
				<ul data-name={this.state.name} className="list-unstyled">
					{listItems}
				</ul>
			</div>
		);
	}
}


ReactDOM.render(
	<Content />,
	document.getElementById('content')
);