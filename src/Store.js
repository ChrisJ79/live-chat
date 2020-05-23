import React from 'react';


export const CTX = React.createContext();


/*

msg {
	from: 'user'
	msg: 'hi'
	topic: 'general'
}

state {
	topic1: [
		{msg}, {msg}, {msg}, {new}
	]
	topic2: [
		
	]
	
}

*/

const initState = {
	General: [
		{from: 'chris', msg: 'hi'},
		{from: 'steve', msg: 'hi'},
		{from: 'john', msg: 'hi'}
	],
	Topic2: [
		{from: 'mike', msg: 'hi'},
		{from: 'cleetus', msg: 'hi'},
		{from: 'jesus', msg: 'hi'}
	]
}


function reducer(state, action) {
	const {from, msg, topic} = action.payload;
	switch(action.type) {
		case 'RECEIVE_MESSAGE':
			return {
				...state,
				[topic]: [
					...state[topic],
					{ from, msg } 
				]
			}
		default:
			return state	
	}

}


export default function Store(props) {

	const reducerHook = React.useReducer(reducer, initState);

	return (
		<CTX.Provider value={reducerHook}>
			{props.children}
		</CTX.Provider>
	)
}




