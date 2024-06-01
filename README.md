# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB. The application allows users to generate short URLs that redirect to the original long URLs.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate short URLs for long URLs
- Track the number of clicks on each short URL
- Redirect to the original URL when a short URL is accessed
- View analytics for each short URL

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4 or higher)
- A package manager (npm or yarn)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/url-shortener.git
    cd url-shortener
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start MongoDB:

    Make sure MongoDB is running on your machine. By default, the application connects to MongoDB at `mongodb://localhost:27017/urlShortner`.

### Running the Application

1. Start the application:

    ```sh
    npm start
    # or
    yarn start
    ```

2. Open your browser and go to `http://localhost:9000`.

## Usage

To use the URL shortener, follow these steps:

1. Enter the original URL in the input field.
2. Click the "Generate" button.
3. A short URL will be generated and displayed.

### Viewing Analytics

To view analytics for a specific short URL, append `/analytics/:shortId` to the base URL. For example:

