import React, { useEffect, useRef, useState } from 'react';
import compress from '../assets/compress.png';
import '../styles/Card.scss';

const Card = props => {

	const [ cardActive, setCardActive]	= useState(props.cardActive)
	const cardRef       				= useRef(null);
	const forceUpdate 					= React.useState()[1].bind(null, {})
	const cardTitle 					= props.cardTitle;
	const cardContent 					= props.cardContent;
	const cardindex     				= props.cardindex;
	const selectHandler 				= props.selectHandler;
	const compressHandler 				= props.compressHandler;

	const cardSelectHandler = (e) => {
		e.preventDefault()
		cardRef.current.setAttribute("id", "active");	
		selectHandler(e);
		
	}

	const cardCompressHandler = (e) => {
		e.preventDefault()
		cardRef.current.removeAttribute("id");
		compressHandler(e);
		
	}

	return(
		<div key={cardindex} ref={cardRef} className="Card" >
			<img src={compress} className="compress" onClick={(e) => {cardCompressHandler(e)}}></img>
			<div className="inner-card" onClick={(e) => cardSelectHandler(e)}>
				<p className="card-title">{ cardTitle }</p>
				<p className="card-content">{ cardContent }</p>
			</div>
			

		</div>
	)
}

export default Card;