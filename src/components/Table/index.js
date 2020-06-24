import React, { Component } from 'react'
import {withContext} from "../../HOCS/withContext"

 class Table extends Component {
	render() {
	 const {name, age} = this.props.context.state
		return (
			<div>
		   This is {name} and my {age}
			</div>
		)
	}
}


export default withContext(Table)
