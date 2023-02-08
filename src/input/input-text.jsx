import React from "react";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		fetch('http://localhost:3000/send', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({'number': this.state.value})
		})
		event.preventDefault();
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<label>
					Number: 
				</label>
			    
				<input type="text" value={this.state.value} placeholder="+2314937853" onChange={this.handleChange} />

				<input className="catButton" type="submit" value="Send Cat Pic" />
			</form>
		)
	}
}

export default Input