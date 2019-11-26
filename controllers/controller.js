var cheerio = require('cheerio');
var request = require('request');
var Article = require('../models/Article');
var website = 'https://www.theonion.com/rss';

function scrapedWeb(callback) 
{
  request(website, function(error, response, XML)
    
  {
    if (error) console.log("Error Scraping", error);
      var $ = cheerio.load(XML);
    $("h3.title").each(function(i, element) 
    {
      var link = $(element).parent().attr("href");
      var title = $(element).text();
      var description = $(element).text();
      var scrapeArticle = new Article(
      {
        title: title,
        link: link,
        summary: description });

scrapeArticle.save(function(error) 
      {
        if (error) console.log("Unable to save article", error); //removes duplicate error msg
      });
    });

    callback();
  });
      
}
exports.scrapedWeb = scrapedWeb;