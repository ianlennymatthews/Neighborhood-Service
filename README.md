# Project Overview: #

Implementation of Zillow's property public view "Neighborhood" section. Consists of three distinct sections:

1) Neighborhood Information - an informational section with the market statistics, estimates and general information

2) Neighborhood Map - An interactive Google Map with markers rendered for properties in the neighborhood

3) Nearby Homes - A photo carrousel of nearby homes with property information overlayed on each photo ↩

![](https://media.giphy.com/media/iI9jtttDLJbQiCTOpL/giphy.gif)



# Major Technologies Used: #

### Client ###
React, Webpack
### Server ###
Node.js, Express
### Database ###
SQLite3



# Getting Started: #

Clone down Neighborhood-Proxy and Neighborhood-Service to your local machine.

### Within the root directory of the 'Neighborhood-Proxy' repo ###
    npm install
    npm run start

### Within the root directory of the 'Neighborhood-Service' repo ###
    npm install
    npm run start

Navigate browser to http://localhost:3000/:id (:id = any number between 1 and 100)


Note: to view the interactive Google Maps Plugin, create a file named "config.js" within the root directory of "Neighborhood-Service" and insert your Google API Key under the variable "GOOGLE_API_KEY". Insert this line as the final line of the file:

module.exports.GOOGLE_API_KEY = GOOGLE_API_KEY;




<!-- # Performance Optimizations # -->
<!-- GZIP TEXT COMPRESSION -->






