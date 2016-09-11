var placeholder = document.createElement('li');
placeholder.className = 'placeholder';

class Content extends React.Component {
	render(){
		return (
			<App />
		);
	}
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cards: ['card0', 'card1', 'card2', 'card3', 'card4', 'card5']
		}
	}
	render(){
		return (
			<div>
				<List cards={this.state.cards} />
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

		//http://help.adobe.com/ko_KR/as3/dev/WSC982AEFA-D020-41aa-8C3D-37AAEB7C132Czephyr_serranozephyr.html
	    e.dataTransfer.effectAllowed='move';
	    e.dataTransfer.setData('text/html', this.dragged);

	}
	dragEnd(e){
		this.dragged.style.display='list-item';
		this.dragged.parentNode.removeChild(placeholder);

		var data = this.state.cards;
		var daragged = this.dragged.dataset.id; //4
		var over = this.over.dataset.id; //2

		data.splice(over, 0, data.splice(daragged, 1)[0]);
		this.setState({cards:data});
	}
	dragOver(e){
		e.preventDefault();
		console.log(this.dragged)
		this.dragged.style.display = 'none';
		console.log(e.target)
		if(e.target.draggable){
			this.over = e.target;
			e.target.parentNode.insertBefore(placeholder, e.target);
		}
	}
	render(){
		// var listItems = this.state.cards.map(function(data, index){
		// 	return (
		// 		<li key={index}>{data}</li>
		// 	);
		// });
		var listItems = this.state.cards.map((data, index)=>{
			return (
				<li 
					data-id={index}
					key={index}
					draggable="true"
					onDragEnd={this.dragEnd.bind(this)}
					onDragStart={this.dragStart.bind(this)}>
					{data}
				</li>
			);
		});

		return (
			<ul className="list list-unstyled" onDragOver={this.dragOver.bind(this)}>
				{listItems}
			</ul>
		);
	}
}

ReactDOM.render(
	<Content />,
	document.getElementById('content')
);