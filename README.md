# UNI CERT SMART CONTRACTS
Smart contracts for the uni_chain certification project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Run to compile the contract. Ensure you have a local copy of a development blockchain e.g ganache running in the background for local testing.

```
truffle compile
```

Then

```
truffle migrate --network development
```

### Prerequisites

You need to have ganache cli or  ganache app which comes in the truffle suite, and npm installed,

You can run ganache-cli in the terminal or open the ganache app

```
ganache-cli
```

Copy the generated Mnemonic 

Paste the mnemonic in Metamask to import the local accounts running on Ganache. Ensure metamask is listening on localhost.

### Installing

You can install project dependencies from the root directory

```
npm install
```

To run the application frontend,

```
cd client
npm install
npm run start
```

## Running the tests

You run tests on the root directory using truffle

### Break down into end to end tests

These tests the smart contracts methods

```
truffle test
```

## Built With

* [Truffle](https://www.trufflesuite.com/) - Javascript suite for efficient smart contract development.
* [Mythx](https://mythx.io/) - Security analysis tool for smart contract development
* [Metamask](https://metamask.io/) - For the browser interaction, this is a chrome extension.


## Authors

* **Allan Katongole** - *Initial work* - UniCerts

