import React from "react";
import {AppContext} from "../appProvider";

export function withContext(Component){
	return function WrapperComponent(props){
		return (
			<AppContext.Consumer>
				{state => <Component {...props} context={state}/>}
			</AppContext.Consumer>
		)
	}
}

 