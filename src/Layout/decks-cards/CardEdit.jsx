import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";
import CardEditNav from "./CardEditNav";
import CardForm from "./CardForm";

export default function CardEdit() {
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const initialFormData = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const history = useHistory();

  //load deck from API
  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    getDeck();
  }, [deckId]);

  //load card from API
  useEffect(() => {
    async function getCard() {
      const response = readCard(cardId);
      const cardFromAPI = await response;
      setCard(cardFromAPI);
    }
    getCard();
  }, [cardId]);

  //handle input changes to update state variables correctly
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //handle submission of form with createCard() function
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(deckId, formData);
    setFormData({ ...initialFormData });
    history.pushState(`/decks/${deckId}`);
  };

  //render breadcrumb nav and CardCreateForm with card prop
  return (
    <div className="card-edit">
      <CardEditNav card={card} deckId={deckId} deck={deck} />
      <CardForm
        formData={card}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/decks/${deckId}`)}
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
