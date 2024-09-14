# ThoughtLink

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description

A robust API backend designed for a social network platform, providing users with the ability to manage and engage with their posts, connect with friends, and interact through various social features. It provides functionality for creating, reading, updating, and deleting thoughts, as well as managing friendships within a social network. The application is built using Node.js, Express, and MongoDB, allowing for efficient handling of user data and interactions. Users can engage with the platform by sharing ideas, providing feedback, and exploring social relationships. The project features a comprehensive API, custom reactions to thoughts, and a well-defined seed data setup for testing and development purposes, all integrated with tools like Insomnia for thorough API testing.

## Walkthrough Video

To view a detailed walkthrough of the API testing process using Insomnia, please watch the video below:

[**Watch the Walkthrough Video**](https://drive.google.com/file/d/1eG8twlgCPD2yy5rnjvzMOsJ75T481_Ai/view)


## Table of Contents

- [Walkthrough-Video](#walkthrough-video)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

To set up ThoughtLink, start by cloning the repository to your local machine using git clone <https://github.com/demichele-c/ThoughtLink>. Navigate to the project directory and run npm install to install all required dependencies. Ensure you have MongoDB running locally.. You can then seed the database with sample data by running npm run seed. To start the application, use npm start or npm run dev for development with hot reloading enabled. The server will be available at http://localhost:3001, where you can interact with the API and test various routes.

## Usage

Once the project is set up and running, you can interact with the API to manage users, thoughts, reactions, and friendships. Use the /api/users endpoint to handle user-related operations, including creating new users, retrieving user information, updating profiles, and deleting users. The /api/thoughts endpoint allows you to manage thoughts, including adding new thoughts, retrieving existing ones, updating them, and deleting them. You can also interact with user friendships and thought reactions via specific endpoints for adding or removing friends and creating or deleting reactions. 

## Contributing

To contribute to this project, please follow these guidelines to ensure a smooth collaboration process. First, fork the repository and clone it to your local machine. Create a new branch for each feature or bug fix you work on, and make sure to include a descriptive name for the branch. Before making changes, ensure that you have the latest version of the codebase by pulling the latest changes from the main branch. After implementing your changes, test your modifications thoroughly to ensure they work as expected. Submit a pull request with a clear and concise description of the changes made, including any relevant issue numbers. Your contribution will be reviewed, and feedback will be provided if necessary. Adhering to these guidelines helps maintain the quality and consistency of the project while enabling effective collaboration.

## Tests

To test the API using Insomnia, first ensure that your server is running. Open Insomnia and create a new request by clicking on the “+” icon or “New Request” button. Configure your request with the appropriate HTTP method (GET, POST, PUT, DELETE) and set the request URL to match the endpoints of your API, such as http://localhost:3001/api/users or http://localhost:3001/api/thoughts. For GET requests, simply click “Send” to retrieve and view the data. For POST requests, include the necessary JSON body data in the request to create new records. For PUT requests, specify the updates in the request body, and for DELETE requests, ensure the correct endpoint is targeted to remove records. Review the response to confirm that the operations succeed and the data is correctly handled. Utilize Insomnia’s features to organize your requests into collections and folders, making it easier to manage and test various API routes efficiently.

## Questions

If you have any questions, please feel free to contact me at [demichele.charles@yahoo.com](mailto:demichele.charles@yahoo.com). You can also find more of my work at [demichele-c](https://github.com/demichele-c).

## License
This project is licensed under the MIT license. Click [here](https://opensource.org/licenses/MIT) for more details.
