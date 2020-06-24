import React, { Component } from 'react'

export const AppContext = React.createContext();

 class AppProvider extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "Krishan",
			 age: 25,
		}
	}
	render() {
		return (
			<AppContext.Provider value={{state: this.state}}>
            {this.props.children}
			</AppContext.Provider>
		)
	}
}


export default AppProvider;