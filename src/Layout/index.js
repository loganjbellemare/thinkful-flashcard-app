import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckCreate from "./decks-new/DeckCreate";
import CardCreate from "./decks-cards-new/CardCreate";
import CardEdit from "./decks-cards/CardEdit";
import DeckEdit from "./decks-edit/DeckEdit";
import StudyView from "./decks-study/StudyView";
import DeckView from "./decks/DeckView";
import HomePage from "./home/HomePage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/decks/new">
            <DeckCreate />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>

          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyView />
          </Route>

          <Route path="/decks/:deckId">
            <DeckView />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
