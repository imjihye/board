var placeholder = document.createElement('li');
placeholder.className='placeholder';

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = {cards:[1,2,3,4,5]};
	}
	render(){
		return (
			<div>
				<List cards={this.state.cards} />
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
			<ul onDragOver={this.dragOver.bind(this)}>
				{listItems}
			</ul>
		);
	}
}


ReactDOM.render(
	<Content />,
	document.getElementById('content')
);