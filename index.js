// Description: A simple command line program that prompts the user for a prompt and then makes a request to the Anthropoic API to complete it.
// Author : [Roger Kibbe](https://github.com/rogerkibbe) [@rogerkibbe](https://twitter.com/rogerkibbe).

const fetch = require('node-fetch');
const readline = require('readline');
require('dotenv').config();
const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-v1';
const API_URL = 'https://api.anthropic.com/v1/complete';
const MAX_TOKENS_TO_SAMPLE = 300;
const PROMPT_PREFIX = '\n\nHuman:';
const PROMPT_SUFFIX = '\n\nAssistant:';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Makes a request to the Anthropoic API to complete a prompt.
 *
 * @param {string} prompt The prompt to complete.
 * @returns {Promise<string>} A promise that resolves with the completion of the prompt.
 */
const makeRequest = async (prompt) => {

 // Add a prefix and suffix to the prompt.
 prompt = PROMPT_PREFIX + " " + prompt + PROMPT_SUFFIX + " ";

  // Make the request to the API. For production, error handling should be added.
 const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      model: MODEL,
      max_tokens_to_sample: MAX_TOKENS_TO_SAMPLE,
      stop_sequences: [PROMPT_PREFIX]
    })
  });

  // Parse the response body and return the completion.
  const data = await response.json();
  return data.completion.trim();
}

/**
 * Prompts the user for a prompt and then makes a request to the Anthropoic API to complete it.
 */
const promptUser = () => {
  // Prompt the user for a prompt.
  rl.question('\nEnter a prompt or type "exit" to quit: ', async (input) => {
    // If the user entered "exit", exit the program.
    if (input === 'exit') {
      rl.close();
      return;
    }
     // Make a request to the API to complete the prompt.
    const completion = await makeRequest(input);

    // Print the completion to the console.
    console.log("\n" + completion);

    // Prompt the user for another prompt.
    promptUser();
  });
}

// Start the program.
promptUser();

