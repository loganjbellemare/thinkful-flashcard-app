# thinkful-flashcard-app

## Flashcard-o-Matic

> An application for creating decks of flashcards, updating them, and studying them

This application is an exercise in using React to render components and React Router for client-side routing.

## Main Features -

### Home Page
![](/screenshots/home-page/home-page.png)

- displays all decks in database
- allows user to view deck, study deck, or delete deck
- lists how many cards are in each deck
- has a create deck button, taking user to a create deck form
  ![](/screenshots/deck-add-screen/deck-add-screen.png)

### Study Page

- clicking 'Study' button on any deck takes user to a study session
- in study session, front of first card is displayed and user can flip cards
  ![](/screenshots/study-page/study-page-front-side.png)
- on back of card, there is a button to take user to the next card
  ![](/screenshots/study-page/study-page-back-side.png)
- when user reaches end of deck, a window pop up is thrown asking if they would like to restart or go to the home page
  ![](/screenshots/study-page/study-page-pop-up.png)
- if selected deck has less than 3 cards, page will display a message that more cards need to be added to deck
  ![](/screenshots/study-page/study-page-not-enough-cards.png)

### View Deck Page

- clicking 'View' button on any deck brings user to deck view page
  ![](/screenshots/deck-view-screen/deck-view-screen.png)
- shows information on selected deck, allowing user to edit, delete, and study deck, or add cards to deck
- displays a list of all cards in deck, allowing user to edit or delete them
- edit deck button brings user to a form with info about selected deck loaded into form
  ![](/screenshots/deck-edit-screen/deck-edit-screen.png)
- add card button takes user to a form to create a new card in selected deck
  ![](/screenshots/card-add-screen/card-add-screen.png)
- edit card button takes user to same form with info about selected card loaded into form
  ![](/screenshots/card-edit-screen/card-edit-screen.png)

## All API calls are done through a json-server included in package

## To install:

Run `npm install` to install dependencies  
Run `npm run start` to start both backend server and frontend client app
