# node-express-restful

> 🗡️ Build a RESTful API using Node and Express.

## Install

Install dependencies
```
$ npm i
```
Create `.env` file
```
MONGODB_URI=<Your Mongodb URI>
```

## Usage

One line to run
```
$ npm start
```

## API

| Route            | HTTP method | Description                 |
|------------------|-------------|-----------------------------|
| /api/cats        | `GET`       | Get all the cats.           |
| /api/cats        | `POST`      | Create a cat.               |
| /api/cats/:catId | `GET`       | Get a single cat.           |
| /api/cats/:catId | `PUT`       | Update a cat with new info. |
| /api/cats/:catId | `DELETE`    | Delete a cat.               |

## License

![](https://img.shields.io/github/license/cuongw/node-express-restful.svg?style=flat-square)
