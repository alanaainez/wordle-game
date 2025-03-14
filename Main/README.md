# wordle-game
Utilizing testing knowledge to make a word guessing game. This will be deployed through
AWS Amplify.

## User Story

```md
AS A user
I WANT a word-guessing game that has a different word every day, similar to Wordle,
SO THAT I can guess a 5-letter word
```

## Acceptance Criteria

```md
GIVEN a Wordle game with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
```

requirements:
       deployed in AWS Amplify, need an amplify url
       github action on push that runs the tests, tests should pass
       fully working Wordle. I should be able to play it
       get a random word from the list to use as the wordle word
       validate the word using the list of words provided. If 5 letter word is not on the list, then it’s an invalid word

github url with a list of valid 5 letter words:https://github.com/axlrommel/wordle