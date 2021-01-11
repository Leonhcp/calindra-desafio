# Calindra test

Project of a system with google maps API rest test.

## Getting Started

First clone this paste into your computer (in case of clone repository) and type on the cmd terminal of the paste "npm i" to install all project's dependencies, after that to run the code type "npm start", for the development start of the project.

### Prerequisites

Node.js.
Git (in case of clone repository).
Postman or Insomnia(recommended), or any program that interact with HTTP-based APIs.

### Installing

First in case of git clone create a paste, open the cmd terminal and type

```
git clone https://github.com/Leonhcp/calindra-desafio.git
```

If not (in case of compressed paste), unzip the past and start from where

Insert in the cmd terminal:

```
npm i
```

And the start:

```
npm start
```

## Running the tests

Start the aplication, open Postman, or equivalent program, and put the URL GET"http://localhost:3000/geoloc".

Set Body to raw JSON and send an array with all the adresses that will be search in the following format.


```

{
    "addresses": ["address 1", "address 2", "address 3", ..., "address n"]
}

```

Send and await for the response.


## Authors

* **Leonardo Holanda** - [My Github](https://github.com/Leonhcp)

## License

This project is licensed under the ISC License.
