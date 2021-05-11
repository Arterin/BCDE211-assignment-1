// The web scraping function from my twitter bot.
// https://github.com/Arterin/saltybet-webscraper/tree/master

const cheerio = require('cheerio');
const axios = require('axios');

async function scrapeSaltybet() {
    // Get saltybet html.
    let response = await axios.get('https://www.saltybet.com/shaker');
    // Load html into cheerio.
    const html = cheerio.load(response.data);
    // Get tournament countdown text from the div.
    let saltyText = html("#compendiumleft > div");
    saltyText = saltyText.text();
    // Format text.
    saltyText = saltyText.trimLeft();
    const lastExclamation = saltyText.indexOf('!') + 1;
    saltyText = saltyText.slice(0, lastExclamation);
    return saltyText;
}

//