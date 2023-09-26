import React from "react";
import { useHistory } from "react-router-dom";
import DeckDeleteButton from "../home/DeckDeleteButton";

export default function DeckViewCard({ deck, deckId }) {
  const history = useHistory();
  return (
    <div>
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
      <div className="d-flex mb-4">
        <div className="mr-auto">
          <button
            type="button"
            className="btn btn-dark m-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span className="fa-solid fa-pencil" />
            Edit
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span className="fa-solid fa-book" />
            Study
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span className="fa-solid fa-plus" />
            Add Cards
          </button>
        </div>
        <DeckDeleteButton deck={deck} />
      </div>
    </div>
  );
}
