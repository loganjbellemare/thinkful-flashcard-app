import React from "react";
import { useHistory } from "react-router-dom";

export default function DeckStudyButton({ deck }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="fa fa-book" /> Study
    </button>
  );
}
