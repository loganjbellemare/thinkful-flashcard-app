import React from "react";
import { useHistory } from "react-router-dom";

export default function CardAddButton({ deckId }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span className="fa-solid fa-plus" />
      Add Cards
    </button>
  );
}
