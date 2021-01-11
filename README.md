# Calindra Challenge

Project of a system with google maps API rest test.

## Getting Started

First clone this repository into your computer (in case of git clone) and type on the cmd terminal of the repository "npm i" to install all project's dependencies. After that, to run the code, type "npm start" for the development start of the project.

### Prerequisites

Node.js.
Git (in case of clone repository).
Postman or Insomnia(recommended), or any program that interact with HTTP-based APIs.

### Installing

First in case of git clone create a folder, open the cmd terminal and type:

```
git clone https://github.com/Leonhcp/calindra-desafio.git
```

If not (in case of compressed folder), unzip the folder and start from here.

Insert in the cmd terminal:

```
npm i
```

And then start:

```
npm start
```

## Running the tests

Start the aplication, open Postman( or equivalent program) and put the URL GET"http://localhost:3000/geoloc".

Set Body to raw JSON and send an Array with all the adresses that will be sought in the following format.


```

{
    "addresses": ["address 1", "address 2", "address 3", ..., "address n"]
}

```

Send and await for the response in JSON format with status code 200 in case of success.

Will appear in the JSON, the distances, in meters, between the addresses input in crescent order.


## Authors

* **Leonardo Holanda** - [My Github](https://github.com/Leonhcp)

## License

This project is licensed under the ISC License.
