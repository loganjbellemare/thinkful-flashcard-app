# thinkful-flashcard-app

## Flashcard-o-Matic

> An application for creating decks of flashcards, updating them, and studying them

This application is an exercise in using React to render components and React Router for client-side routing.

## Main Features -

### Home Page

*displays all decks in database
*has a create deck button, taking user to a create deck form
*allows user to view deck, study deck, or delete deck
*lists how many cards are in each deck

### Study Page

*clicking 'Study' button on any deck takes user to a study session
*in study session, front of first card is displayed and user can flip cards
*on back of card, there is a button to take user to the next card
*when user reaches end of deck, a window pop up is thrown asking if they would like to restart or go to the home page
\*if selected deck has less than 3 cards, page will display a message that more cards need to be added to deck

### View Deck Page

*clicking 'View' button on any deck brings user to deck view page
*shows information on selected deck, allowing user to edit, delete, and study deck, or add cards to deck
*edit deck button brings user to a form with info about selected deck loaded into form
*displays a list of all cards in deck, allowing user to edit or delete them
*add card button takes user to a form to create a new card in selected deck
*edit card button takes user to same form with info about selected card loaded into form

## All API calls are done through a json-server included in package

## To install:

Run `npm install` to install dependencies
Run `npm run start` to start both backend server and frontend client app
