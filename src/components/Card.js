import React, { useEffect, useRef, useState } from 'react';
import '../styles/Card.scss';

const Card = props => {

	const [ cardActive, setCardActive]	= useState(props.cardActive)
	const cardRef       				= useRef(null);
	const forceUpdate 					= React.useState()[1].bind(null, {})
	const cardTitle 					= props.cardTitle;
	const cardContent 					= props.cardContent;
	const cardindex     				= props.cardindex;
	const selectHandler 				= props.selectHandler;

	useEffect(() => {
		if(cardActive === true){
			cardRef.current.setAttribute("Class", "Card select-mode");
		}
	}, [])

	const cardSelectHandler = (e) => {
		e.preventDefault()
		console.log("clicking")
		selectHandler(e);
		cardRef.current.setAttribute("id", "active");
		// forceUpdate();
	}

	return(
		<div key={cardindex} ref={cardRef} className="Card" onClick={(e) => cardSelectHandler(e)}>
			<p className="card-title">{ cardTitle }</p>
			<p className="card-content">{ cardContent }</p>
		</div>
	)
}

export default Card;