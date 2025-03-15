# wordle-game
Utilizing testing knowledge to make a word guessing game. This will be deployed through
AWS Amplify.

## User Story

```md
As a player, 
I want to guess a hidden word within a limited number of attempts, 
So that I can challenge my vocabulary and problem-solving skills.
```

## Acceptance Criteria

```md
GIVEN I open the game in my browser,
WHEN I start a new game,
THEN I should see an input field to enter guesses.
GIVEN I enter a word into the input field,
WHEN I submit my guess,
THEN the system should verify if it is a valid word (i.e matching the required length and existing in the dictionary).
GIVEN I submit a valid word,
WHEN my guess is processed,
THEN I should see feedback indicating correct letters in the correct position (highlighted green) and correct letters in the wrong position (highlighted yellow).
GIVEN I gess the correct word,
WHEN my guess matches the hidden word,
THEN I should see a success message and an option to start a new game.
GIVEN I am playing the game on different devices,
WHEN I resize my screen,
THEN the UI should adjust properly without breaking the gameplay experience.
GIVEN I access the game's URL,
WHEN I visit the site,
THEN the game should load quickly and function properly, as it is deployed via AWS Amplify.
```

## Requirements:
-deployed in AWS Amplify 
       -need an amplify url
-github action on push that runs the tests
       -tests should pass
-fully working Wordle that is playable
       -generates a random word from the list to use as the Wordle word
       -validates the word using the list of words provided 
              -if the 5 letter word is not on the list, then it’s an invalid word

github url with a list of valid 5 letter words:https://github.com/axlrommel/wordle

