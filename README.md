# My Reads Project (Udacity) 

This project is my variant of the My Reads project created for Udacity's React course. 
It is a simple book shelf management system with its own bookcase and a possibility to integrate books from a provided API. 


## Installation

How to start the application:

- Navigate to the correct folder 
```sh
cd starter
```
- Install all required project dependencies
```sh
npm i
```
- Start the Development Server
```sh
npm start
```


## File-structure 

```bash
├── CONTRIBUTING.md
├── README.md 
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico
│   └── index.html 
├── src
│   ├── App.css
│   ├── App.js
│   ├── Book.js
│   ├── BookShelf.js
│   ├── BookShelfChanger.js
│   ├── BookShelfTray.js
│   ├── SearchBookPage.js
│   ├── icons
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css
│   ├── index.js
│   └── utils
│       └── BooksAPI.js
└── yarn.lock

```


## Backend API

The API provided by Udacity contains a small database of books that can be searched and added. 

⚠️ It is important to note that the database behind the api is for demo purposes only and does not reflect a real time library database.
(More infos:[`Important`](#Important))

There are 4 possible requests to the API:
- 1️⃣ [`get`](#get)
- 2️⃣ [`getAll`](#getall)
- 3️⃣ [`update`](#update)
- 4️⃣ [`search`](#search)

### 1️⃣`get`

Method Signature:

```js
get(bookID);
```
- bookID: `<String>` containing any available book `id` attribute (e.g. "1wy49i-gQjIC")
- Returns a Promise which resolves to a JSON object containing a single book object matching the ```bookID```.


### 2️⃣`getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.

### 3️⃣`update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### 4️⃣`search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository was created based on the entry code for _all_ Udacity students.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
