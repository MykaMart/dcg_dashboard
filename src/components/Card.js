import React, { useEffect, useRef, useState } from 'react';
import compress from '../assets/compress.png';
import '../styles/Card.scss';

const Card = props => {

	const [ cardActive, setCardActive]	= useState(props.cardActive)
	const cardRef       				= useRef(null);
	const forceUpdate 					= React.useState()[1].bind(null, {})
	const cardTitle 					= props.cardTitle;
	const cardContent 					= props.cardContent;
	const cardIndex     				= props.cardIndex;
	const selectHandler 				= props.selectHandler;
	const compressHandler 				= props.compressHandler;

	const cardSelectHandler = (e) => {
		e.preventDefault()
		selectHandler(e, cardIndex + 1);
		cardRef.current.setAttribute("id", "active");	
	}

	const cardCompressHandler = (e) => {
		e.preventDefault()
		compressHandler(e);
		cardRef.current.removeAttribute("id");
		
	}

	return(
		<div key={cardIndex} data-key={cardIndex} ref={cardRef} className="Card" >
			<img src={compress} className="compress" onClick={(e) => {cardCompressHandler(e)}}></img>
			<div className="inner-card" onClick={(e) => cardSelectHandler(e)}>
				<p className="card-title">{ cardTitle }</p>
				<p className="card-content">{ cardContent }</p>
			</div>
			

		</div>
	)
}

export default Card;