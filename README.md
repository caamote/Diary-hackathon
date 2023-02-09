# Debug assignment 2

Instructions on how to complete the assignment can be found [here](./instructions/README.md).
# Architecture

*Snack Rankings* is a back-end project that allows users to view and vote on their favourite snacks.

This project has two key elements:

- An API that allows users to vote on snacks and see a list of snacks with their total votes
- A database storing the snack data

## Installation
Navigate to api folder and run following commands:
`npm install -D` to get all required libraries
`npm run setup-db` - to create databes tables

## Environment
This app requires `.env` to run locally. It needs the following info:
```bash
PORT=xxxx
```

## Development server
To run the server navigate to api folder and run following command:
`npm run dev`

## Deployment server
To run the server navigate to api folder and run following command:
`npm run start`
