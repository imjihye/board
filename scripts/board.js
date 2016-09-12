var placeholder = document.createElement('li');
placeholder.className='placeholder';

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = {cards:[1,2,3,4,5]};
	}
	dragStart(e){
		this.dragged = e.currentTarget;
		e.dataTransfer.effectAllowed='move';
		e.dataTransfer.setData('text/html', this.dragged);
	}
	dragEnd(e){
		this.dragged.style.display='list-item';
		this.dragged.parentNode.removeChild(placeholder);

		var data = this.state.cards;
		var daragged = this.dragged.dataset.id;
		var over = this.over.dataset.id;

		data.splice(over, 0, data.splice(daragged, 1)[0]);
		this.setState({cards:data});
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
				<List cards={this.state.cards} 
						onDragStart={this.dragStart.bind(this)}
						onDragEnd={this.dragEnd.bind(this)}/>
				<List cards={this.state.cards} 
						onDragStart={this.dragStart.bind(this)}
						onDragEnd={this.dragEnd.bind(this)}/>
			</div>
		);
	}
}

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {...props};
	}
	dragStart(e){
		this.props.onDragStart(e);
	}
	dragEnd(e){
		this.props.onDragEnd(e);
	}
	render(){
		var listItems = this.state.cards.map((value, index) => {
			return (<li 
						data-id={index}
						draggable="true"
						onDragStart={this.dragStart.bind(this)}
						onDragEnd={this.dragEnd.bind(this)}
						key={index}>{value}
					</li>);
		});
		return (
			<ul className="list list-unstyled">
				{listItems}
			</ul>
		);
	}
}


ReactDOM.render(
	<Content />,
	document.getElementById('content')
);