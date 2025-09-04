# Dad Card 🃏

An MCP server for all your dad-joking needs. Powered by Node.js and the Model Context Protocol.

<!-- Add badges here -->
<!--
[![NPM version](https://img.shields.io/npm/v/dad-card.svg?style=flat)](https://www.npmjs.com/package/dad-card)
[![Build Status](https://img.shields.io/travis/your-username/dad-card.svg?style=flat&label=Travis)](https://travis-ci.org/your-username/dad-card)
-->

`dad-card` is a lightweight Model Context Protocol (MCP) server that exposes tools and resources for Large Language Model (LLM) applications. It's designed to be a fun and practical example of how to provide specialized capabilities to AI agents, focusing on the timeless art of dad jokes and heartfelt messages.

## ✨ Features

- **Dad Joke Tool**: On-demand dad jokes, ready to be integrated into any LLM-powered chat.
- **Dynamic Card Generator**: Create personalized digital card messages for various occasions.
- **MCP Compliant**: Built with `@modelcontextprotocol/sdk` to easily connect with MCP clients.
- **Configurable**: Uses `dotenv` to manage environment variables for easy setup.
- **Formatted Text**: Leverages `word-wrap` to ensure messages and jokes are perfectly formatted.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm

### Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/your-username/dad-card.git
    cd dad-card
    ```

2.  Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

Before running the server, you need to set up your environment variables.

1.  Create a `.env` file in the root of the project by copying the example file:

    ```sh
    cp .env.example .env
    ```

2.  Edit the `.env` file with your desired settings.

    ```dotenv
    # .env
    # Port for the MCP server (if using HTTP transport)
    PORT=3000

    # You can add other configurations here, like API keys for external services
    # DAD_JOKE_API_KEY=your_api_key_here
    ```

### Running the Server

Start the MCP server with the following command:

```sh
npm start
```

The server will now be running and ready to accept connections from an MCP client, like the MCP Inspector.

## 🤖 MCP API

The `dad-card` server exposes the following tools, resources, and prompts.

### Tools

#### 🛠️ `get-dad-joke`

Fetches a random, high-quality dad joke.

- **Description**: "Returns a classic dad joke."
- **Input**: None
- **Output**: A `text` object containing the joke.

**Example Usage (from an MCP client):**

```javascript
const jokeResult = await client.callTool({ name: "get-dad-joke" });
console.log(jokeResult.content[0].text);
// Why don't skeletons fight each other? They don't have the guts.
```

### Resources

#### 📄 `card://{occasion}/{recipient}`

Generates a personalized message for a digital card.

- **Description**: "Creates a formatted message for a card based on the occasion and recipient."
- **URI Template**: `card://{occasion}/{recipient}`
- **Parameters**:
  - `occasion` (string): The event (e.g., `fathers-day`, `birthday`).
  - `recipient` (string): The name of the person receiving the card (e.g., `Dad`, `Pops`).
- **Output**: A resource with the formatted card text.

**Example Usage (from an MCP client):**

```javascript
const cardMessage = await client.readResource({
  uri: "card://fathers-day/Dad",
});
console.log(cardMessage.contents[0].text);
// Happy Father's Day, Dad! Thanks for everything.
```

### Prompts

#### ✍️ `write-card-message`

A prompt template to guide an LLM in composing a custom card message.

- **Description**: "Helps write a personalized message for a card."
- **Arguments**:
  - `occasion` (string): The event for the card.
  - `recipient_name` (string): The name of the recipient.
  - `tone` (string): The desired tone of the message (e.g., `funny`, `sentimental`, `formal`).
- **Output**: A set of messages to be sent to an LLM for completion.

**Example Usage (from an MCP client):**

```javascript
const prompt = await client.getPrompt({
  name: "write-card-message",
  arguments: {
    occasion: "Birthday",
    recipient_name: "Dad",
    tone: "funny",
  },
});
// The client can now use these prompt messages to get a completion from an LLM.
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bugs, feature requests, or improvements.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
