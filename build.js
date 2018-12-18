var Metalsmith  = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var nav = require('./nav.json');
var fooditems = require('./foodmenu.json');
var timings= require('./hours.json');

Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .metadata({                 // add any variable you want
                              // use them in layout, other plugins
    author: "Chandana",

    links: nav, 
    menuitems: fooditems,
    time: timings          // Add navigation information
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .ignore("*.dat1")           // Use to ignore files and directories
  .use(markdown())
  .use(layouts({
    default: "base.njk",
    directory: "layouts",
    // pattern: ["*", "!*.txt", "!*.css", "!HomeWork2.html"]
}))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });