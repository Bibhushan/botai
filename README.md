# Bot AI App

## Introduction

The app demonstrates a users chat with an AI model. Users are able to like or dislike the response returned by AI model. For each conversation, users can give a rating between 1 to 5.

The user is able to have multiple conversations.

Once the user has completed a conversation, the chat gets saved. This chat can be
revisited from a panel on the side/top bar. While viewing a past conversation, the user
is also able to see the feedback provided. 

## Chat Window

By default the app shows the Chat inteface from where users can ask questions. 
When any question is added, the bot tries to find an answer. Answer is displayed in the chat history. 
Users can hover over the bot's response to see like/dislike button. On clicking any of these buttons, a form to enter feedback is displayed. 
Once the feedback is entered, the star rating is visible and users can update the same. 
Users can save the chat by using the Save button.

## Left Pane

This has two options: 
1. Start New Chat: initiates a new chat. Saving of previous chat is not enabled yet.
2. View past chat history: displays the chat history. We use local storage to store the chat history. It is advised to clear to regularly.

## How to start the service and use the application 

The application is availble on vercel. Go to https://botai-eta.vercel.app/ to start the app.

## Reasoning behind your technical choices

Due to short time given Material UI components have been used widely. All the custom components are stored in src/components folder. App.js is the main component which contains all other components.


## Reasoning behind your design choices

Design wise I tried to replicate the Figma design provided.

## TO DO
1. Like Dislike Interface on chat: when liked, the like icon should be highlighted and dislike icon to be de-highlighted. The opposite should also hold true. 
2. Save option saves as a new conversation every time save is clicked. Save should be able to save the current conversation only.
3. The conversation history doesn't show 'Today' for today's date, it shows the date itself. To be fixed.
4. The conversations are not grouped by date. Conversations belonging to same date are shown in different groups instead of one group. 


