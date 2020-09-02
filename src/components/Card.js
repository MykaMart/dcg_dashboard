import React from 'react';
import '../styles/Card.scss';

const cardTitle = "Percent Accuracy";
const cardContent = "87.0%";

const Card = props => {

	return(
		<div className="Card">
			<p className="card-title">{ cardTitle }</p>
			<p className="card-content">{ cardContent }</p>
		</div>
	)
}

export default Card;