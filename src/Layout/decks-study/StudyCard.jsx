import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import CardAddButton from "./CardAddButton";
import CardFlip from "./CardFlip";
import CardNextButton from "./CardNextButton";

export default function StudyCard({
  cards,
  currentCard,
  setCurrentCard,
  deckId,
}) {
  const [cardCount, setCardCount] = useState(1);
  const [isFrontSide, setIsFrontSide] = useState(true);
  const history = useHistory();
  const { url } = useRouteMatch();

  //handler for when next button is clicked
  const handleNextButton = () => {
    //update state variables as user clicks through cards
    if (cardCount < cards.length) {
      setIsFrontSide((currentSide) => !currentSide);
      setCurrentCard(cards[cardCount]);
      setCardCount((currentCount) => currentCount + 1);
    } else {
      //throw pop up notifying user has reached end of deck
      if (
        window.confirm('Restart cards? Click "cancel" to return to home page.')
      ) {
        //restart deck
        setIsFrontSide((currentSide) => !currentSide);
        setCurrentCard(cards[0]);
        setCardCount(1);
        history.push(url);
      } else {
        //return home if user wishes to return to home page
        history.push("/");
      }

      //if cards.length is 2 or less, display prompt to add more cards
    }
  };

  if (cards.length < 3) {
    return (
      <div>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <CardAddButton deckId={deckId} />
      </div>
    );
  }

  //if isFrontSide is true, display front of card, flip button
  if (isFrontSide) {
    return (
      <div className="card">
        <h5 className="card-title p-2">
          Card {cardCount} of {cards.length}
        </h5>
        <p className="card-text p-2">{currentCard.front}</p>
        <CardFlip setIsFrontSide={setIsFrontSide} />
      </div>
    );
  }
  return (
    <div className="card">
      <h5 className="card-title p-2">
        Card {cardCount} of {cards.length}
      </h5>
      <p className="card-text p-2">{currentCard.back}</p>
      <div className="card-body p-2">
        <CardFlip setIsFrontSide={setIsFrontSide} />
        <CardNextButton handleNextButton={handleNextButton} />
      </div>
    </div>
  );
}
