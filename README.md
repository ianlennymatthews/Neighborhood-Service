# Project Overview:

_Neighborhood_ is an implementation of Zillow's property view "Neighborhood" section from scratch. This project is an evolution of a [legacy system](https://github.com/hack-reactor-front-end-abrm/Neighborhood-Service) that sought to replicate Zillow's Neighborhood component.

This application builds on the legacy project by introducing a number of improvements:

- 🚀 Transition from `SQLite` to a more robust and scalable `MongoDB` database
- 👍 Server and client enhancements to handle extreme bursts in concurrent requests
  - Completely revamped client-side code that behaves well when positioned behind a load balancer such as `Nginx`
  - Implementation of an in-memory cache using the memory-cache node module

## Table of Contents

1. [Overview](#overview)
1. [Requirements](#requirements)
1. [Usage](#usage)

## Overview

#### Client Interface:

![interface](https://media.giphy.com/media/iI9jtttDLJbQiCTOpL/giphy.gif)

#### Stress tests:

- Database server hosted on a single EC2 t2.micro
  - 10 million `neighborhood` records
- Node.js component server hosted on 3 EC2 t2.micros load balanced with Nginx

1.  Each request is a `GET` request for a random API endpoint (a neighborhoods with `id` between `1` and `10,000,000`)

##### 3000 Requests Per Second Over 1 minute (3% Error Rate)

![Screenshot to be Added!]()

2. Making a get request to a single api endpoint that represents a neighborhood with a single `id`

##### 4000 Requests Per Second Over 1 minute (7.04% Error Rate)

![4000](https://i.imgur.com/0xJFbbH.png)

## Requirements

- Node v10.13.0 (LTS as of May 2019) or higher
- MongoDB for the database server

## Usage

#### Server

> 1. Install dependencies with `npm install`
> 2. After connecting to the database, from the root directory run `npm run seedDatabase`
> 3. The main server file is `server/server.js`
>    -- If nodemon is already installed globally (it is not part of the dependencies), you may start the server via `npm run server-dev` for development purposes or `npm start` for production
>    -- The server uses port 3009 by default, but you may set it using an environment variable `process.env.PORT`

#### Client

> The client side is built using Webpack:
>
> > `npm run dev`: Builds the client-side files in development mode and does not do full bundling. This also activates watch mode by default so it rebuilds whenever you make and save changes
>
> > `npm run build`: Builds the client-side files in production mode, with full bundling. This reduces file size, but is less useful in debugging (some errors do not provide as much detail as in development mod

- [Slide deck of more results found here!](https://docs.google.com/presentation/d/1JHsnxxnmMg-SkkeLKGPDCdFcSh4QanGKgs95p-WkBeA/edit?usp=sharing)





