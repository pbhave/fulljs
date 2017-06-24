import React from 'react';
import Header from './Header';

class App extends React.component {
	state = {
		pageHeader: 'Naming contest'
	};
	render(){
		return (
			<div className="App">
			<Header Message={this.state.pageHeader} />
			<div>...</div>
			</div>
		
		);
			
	}
}


export default App;