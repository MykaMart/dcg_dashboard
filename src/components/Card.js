import React, { useRef }	from 'react';
import compress 			from '../assets/compress.png';
import                           '../styles/Card.scss';

const Card = props => {

	const cardRef       				= useRef(null);
	const cardTitle 					= props.cardTitle;
	const cardContent 					= props.cardContent;
	const cardIndex     				= props.cardIndex;
	const selectHandler 				= props.selectHandler;
	const compressHandler 				= props.compressHandler;

	const cardSelectHandler = (e) => {
		e.preventDefault();
		selectHandler(e, cardIndex + 1);
		setTimeout(() => {  cardRef.current.setAttribute("id", "active"); }, 100);
			
	}

	const cardCompressHandler = (e) => {
		e.preventDefault();
		compressHandler(e);
		setTimeout(() => {  cardRef.current.removeAttribute("id"); }, 100);
		
	}

	return(
		<div key={cardIndex} data-key={cardIndex} ref={cardRef} className="Card" >
			<img src={compress} className="compress" onClick={(e) => {cardCompressHandler(e)}} alt="compresss card"></img>
			<div className="inner-card" onClick={(e) => cardSelectHandler(e)}>
				<p className="card-title">{ cardTitle }</p>
				<p className="card-content">{ cardContent }</p>
			</div>
		</div>
	)
}

export default Card;