import React from "react";
import { useHistory } from "react-router-dom";

export default function DeckCreateButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/new`)}
    >
      <span className="fa-solid fa-plus" /> Create Deck
    </button>
  );
}
