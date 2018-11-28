import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Navigation extends React.Component{
	render(){
		return(
			<div class="w3-bar w3-border w3-light-grey">
				<a href="/" class="w3-bar-item">
					<img src={this.props.src} height={18} width={15}/>
				</a>
				<a href="/" class="w3-bar-item w3-button w3-pink">Home</a>
				<a href="/" class="w3-bar-item w3-button">Profile</a>
				<a href="/" class="w3-bar-item w3-button">Contact</a>
			</div>
		);
	}
}

export class Content extends React.Component{
	constructor(props){
		super(props);
		this.state={theme:'Light',bg:'#ffffff',f:'#000000',src:"https://c.tadst.com/gfx/750w/argentina-dls.jpg?1"};
		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme(){
		if(this.state.theme=='Light'){
			this.setState({theme:"Dark",bg:'#000000',f:'#ffffff',src:"https://www.abc.net.au/news/image/9776766-3x2-700x467.jpg"});
		}
		else{
			this.setState({theme:"Light",bg:'#ffffff',f:'#000000',src:"https://c.tadst.com/gfx/750w/argentina-dls.jpg?1"});
		}
	}

	render(){
		return(
			<div style={{background:this.state.bg, color:this.state.f}}>
				<h1>Welcome to {this.props.name}'s First React App and the Theme is {this.state.theme}</h1>
				<button onClick={this.changeTheme} class="w3-button w3-round-large w3-pink">
					Change Theme
				</button>
				<br/>
				<br/>
				<img src={this.state.src}/>
			</div>
		);
	}
}
Content.defaultProps = {name : "My"}

export class Header extends React.Component{
	render(){
		return(
			<div>
				<Navigation src="https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));