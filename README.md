# My Reads Project (Udacity) 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project is my variant of the My Reads project created for Udacity's React course. 
It is a simple bookshelf management system with its own bookshelf and a possibility to integrate books from a provided API. 

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

## Preview

### Your own Bookshelf
![Bildschirmfoto 2022-08-09 um 13 40 56](https://user-images.githubusercontent.com/82942834/183638843-466adcb8-6f1e-4b78-b7ea-9cd96cae8dfb.png)

### Choose the status of your books
![Bildschirmfoto 2022-08-09 um 13 44 00](https://user-images.githubusercontent.com/82942834/183639118-f33c19db-efbc-484e-a5df-a6c4075af1dd.png)

### Search and add new Books
![Bildschirmfoto 2022-08-09 um 13 41 26](https://user-images.githubusercontent.com/82942834/183638947-63a0a4a3-b882-4b1f-807d-444b38a9e3e3.png)
![Bildschirmfoto 2022-08-09 um 13 41 40](https://user-images.githubusercontent.com/82942834/183638951-3e6aa3c0-ac4d-499a-aeb7-03ef0c62add5.png)



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
