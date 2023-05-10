# Anthropic LLM Simple Client

This is a command-line app that uses the [Anthropic](https://www.anthropic.com/) LLM API to complete text input. Anthropic is a competitor to OpenAI and the creator of the [Claude bot](https://console.anthropic.com/chat/) 

It was built with Node.js and uses the `dotenv`, `node-fetch`, and `readline` libraries.

## Installation

To use this app, you need to have Node.js and NPM installed. Then, follow these steps:

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Get an Anthropic API key: Go to https://www.anthropic.com/product and request access. 

## Configuration

The app uses the `dotenv` library to load configuration options from a `.env` file. You need to create this file (or edit and rename the `.env.sample` file) in the project directory and add the following configuration options:

- `ANTHROPIC_API_KEY=YOUR_API_KEY`

## Usage

To use the app, follow these steps:

1. Open your terminal and navigate to the project directory.
2. Run `npm start` to start the app.
3. Enter a prompt and press Enter to submit it.
4. The app will make a request to the Anthropic API and return the completed prompt.

You can exit the app at any time by typing "exit" and pressing Enter.

Note: This app uses the text completion API e.g. make a request and get a response. It does not remember context and therefore is not a chatbot


## Dependencies

This app uses the following Node.js libraries:

- `dotenv`: Loads environment variables from a `.env` file.
- `node-fetch`: Makes HTTP requests to the Anthropic API.
- `readline`: Provides an interface for reading input from the command line.

## Author

This app was created by [Roger Kibbe](https://github.com/rogerkibbe) [@rogerkibbe](https://twitter.com/rogerkibbe).