import React, { useEffect, useRef, useState }   from 'react';
import Card                             from './components/Card';
import './App.scss';

function App() {

  const [ data, setData ]             = useState(["88%","21%","12%","34%","56%","54%"]);
  const [ cardActive, setCardActive ] = useState(false);
  const cardDivRef                    = useRef(null);
  const collapsedRef                  = useRef(null);
  const activeCardRef                 = useRef(null);
  const inactiveCardsRef              = useRef(null);
  const forceUpdate                   = React.useState()[1].bind(null, {})
  const cardTitle                     = "Percent Accuracy";

  useEffect(() => {
    fetch("http://34.69.55.92/mockdata")
    .then(res => res.json())
    .then(
      (result) => {
      setData(result)
      },
      (error) => {
        console.log(error);
      }
    )
  }, [])

  const selectHandler = (e, selectedCard) => {
      e.preventDefault()
      setCardActive(true)
      moveCardsHandler(selectedCard)
      cardDivRef.current.setAttribute("id", "card-selected-div");
      forceUpdate()
  }
  const compressHandler = (e) => {
      e.preventDefault()
      setCardActive(false)
      returnCardsHandler()
      cardDivRef.current.setAttribute("id", "card-div");
      forceUpdate()
  }

  const moveCardsHandler = (selectedCard) => {
    const cardCount   = document.getElementById("collapsed").childElementCount -1
    let query         = "#collapsed div:nth-child(" + selectedCard.toString() +")"
    const activeCard  = document.querySelector(query)

    activeCardRef.current.append(activeCard)

    console.log(cardDivRef.current)
    for(let i = 1; i <= cardCount; i++){
      // if(i !== selectedCard) {
        query       = "#collapsed div:nth-child(1)"
        const card  = document.querySelector(query)
        card.setAttribute("class", "Card inactive")
        inactiveCardsRef.current.append(card)
      // } 
    }

    forceUpdate()
  }

  const returnCardsHandler = () => {
    const cardCount   = document.getElementById("inactiveCardsDiv").childElementCount
    const activeCard = activeCardRef.current.firstElementChild
    const activeCardKey = (parseInt(activeCard.getAttribute("data-key")) + 1).toString()
    console.log(activeCard)

    for(let i=1; i <= cardCount; i++) {
      const query = "#inactiveCardsDiv div:nth-child(1)"
      const card = document.querySelector(query)
      console.log(card.getAttribute("data-key"))
      console.log(activeCard.getAttribute("data-key") + 1)
      if(card.getAttribute("data-key") === activeCardKey) {
        collapsedRef.current.append(activeCard)
      }
      card.setAttribute("class", "Card")
      collapsedRef.current.append(card)
    }

  }

  return (
    <div className="App">
        <div className="card-div" id="card-div" ref={cardDivRef}>
          <div id="collapsed" ref={collapsedRef}>
            {
              data.map((datum, index) => (
                  <Card cardIndex={index} cardTitle={cardTitle} cardContent={datum} selectHandler={selectHandler} compressHandler={compressHandler} cardActive={cardActive} selected={true}/>
              )) 
            }
          </div>
          <div id="activeCardDiv" ref={activeCardRef}></div>
          <div id="inactiveCardsDiv" ref={inactiveCardsRef}></div>
        </div>
    </div>
  );
}

export default App;