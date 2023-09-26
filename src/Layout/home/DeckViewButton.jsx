import React from "react";
import { useHistory } from "react-router-dom";

export default function DeckViewButton({ deck }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      <span className="fa-regular fa-eye" /> View
    </button>
  );
}
