import React, { useEffect, useRef, useState } from 'react';
import Card                                   from '../components/Card';
import                                             '../App.scss';

function CardArea(props) {

  const [ data, setData ]             = useState(props.data);
  const cardDivRef                    = useRef(null);
  const collapsedRef                  = useRef(null);
  const activeCardRef                 = useRef(null);
  const inactiveCardsRef              = useRef(null);
  const cardTitle                     = "Percent Accuracy";


  const selectHandler = (e, selectedCard) => {
      e.preventDefault()
      moveCardsHandler(selectedCard)
      cardDivRef.current.setAttribute("id", "card-selected-div");
  }
  const compressHandler = (e) => {
      e.preventDefault()
      returnCardsHandler()
      cardDivRef.current.setAttribute("id", "card-div");
  }

  const moveCardsHandler = (selectedCard) => {
    const cardCount   = document.getElementById("collapsed").childElementCount;
    let   query       = "#collapsed > div:nth-child(" + selectedCard.toString() +")";
    const activeCard  = document.querySelector(query);

    activeCardRef.current.append(activeCard);

    for(let i = 1; i <= cardCount; i++){
        console.log(i)
      if(i !== selectedCard) {
        query       = "#collapsed > div:nth-child(1)";
        const card  = document.querySelector(query);

        card.setAttribute("class", "Card inactive");
        inactiveCardsRef.current.append(card);
      } 
    }
  }

  const returnCardsHandler = () => {
    const cardCount     = document.getElementById("inactiveCardsDiv").childElementCount;
    const activeCard    = activeCardRef.current.firstElementChild;
    const activeCardKey = (parseInt(activeCard.getAttribute("data-key")) + 1).toString();

    for(let i=1; i <= cardCount; i++) {
      const query = "#inactiveCardsDiv div:nth-child(1)";
      const card  = document.querySelector(query);

      if(card.getAttribute("data-key") === activeCardKey) {
        collapsedRef.current.append(activeCard);
      }

      card.setAttribute("class", "Card")
      collapsedRef.current.append(card)
    }

    const activeCardCount = document.getElementById("activeCardDiv").childElementCount

    if (activeCardCount > 0){
      collapsedRef.current.append(activeCard)
    }

  }

  return (
    <div className="CardArea">
        <div className="card-div" id="card-div" ref={cardDivRef}>
          <div id="collapsed" ref={collapsedRef}>
            {
              data.map((datum, index) => (
                  <Card cardIndex={index} cardTitle={cardTitle} cardContent={datum} selectHandler={selectHandler} compressHandler={compressHandler} />
              )) 
            }
          </div>
          <div id="activeCardDiv" ref={activeCardRef}></div>
          <div id="inactiveCardsDiv" ref={inactiveCardsRef}></div>
        </div>
    </div>
  );
}

export default CardArea;