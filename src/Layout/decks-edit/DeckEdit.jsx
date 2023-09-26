import React, { useState, useEffect } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";
import DeckEditNav from "./DeckEditNav";
import DeckForm from "../decks/DeckForm";

export default function DeckEdit() {
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const initialFormData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({
    name: deck.name,
    description: deck.description,
  });
  //handle changes made to input fields
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target]: target.value,
    });
  };

  //handle submission of new form using updateDeck from API
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck(formData);
    setFormData({ ...initialFormData });
    history.push(`/decks/${deck.id}`);
  };

  //load deck using readDeck function
  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    getDeck();
  }, [deckId]);

  return (
    <div className="deck-edit">
      <DeckEditNav deck={deck} />
      <DeckForm
        formData={deck}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/decks/${deck.id}`)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
