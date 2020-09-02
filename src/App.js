import React, { useEffect, useRef, useState }   from 'react';
import Card                             from './components/Card';
import './App.scss';

function App() {

  const [ data, setData ]             = useState(["88%","21%","12%","34%","56%","54%"]);
  const [ cardActive, setCardActive ] = useState(false);
  const cardDivRef                    = useRef(null);
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

  const selectHandler = (e) => {
      e.preventDefault()
      cardDivRef.current.setAttribute("id", "card-selected-div");
      // setCardActive(true);
      forceUpdate()
  }
  const compressHandler = (e) => {
      e.preventDefault()
      cardDivRef.current.setAttribute("id", "card-div");
      // setCardActive(true);
      forceUpdate()
  }

  return (
    <div className="App">
        <div className="card-div" id="card-div" ref={cardDivRef}>
          {
            data.map((datum, index) => (
                <Card cardIndex={index} cardTitle={cardTitle} cardContent={datum} selectHandler={selectHandler} compressHandler={compressHandler} cardActive={cardActive} selected={true}/>
            )) 
          }
        </div>
    </div>
  );
}

export default App;
