# YAHOO Finance Options Data React App
This project pulls data from Yahoo Finance's options data. Specifically, we will be pulling the following columns:
* `Contract Name`
* `Strike`
* `Last Price`
* `Bid`
* `Ask`
* `Change`

I used the `axios` library to fetch the data from a Yahoo Finance API. This was easier than webscraping, and also dodged issues with CORS when using `XMLHTMLRequests`. 

## Prerequisites 
You will need `Node.js`/ `npm` installed.

## To Run
To run, you just need to `cd` into the `options-search` directory and run `npm start`.
