import React, { Component } from 'react';
import AppProvider from "./appProvider"
import Table from './components/Table'
class App extends Component {
	render() {
		return (
			<AppProvider>
				This is App Component
				<Table/>
			</AppProvider>
		)
	}
}

export default App
