// dependencies
var fs = require("fs");
var postcss = require("postcss");
var atImport = require("postcss-import");
var atNext = require("postcss-cssnext");

// css to be processed
var css = fs.readFileSync("./src/styles/index.css", "utf8");

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is required so relative import can work from input dirname
    from: "./src/styles/index.css"
  })
  .then(function (result) {
    atNext.process(result).then(function(output){
      fs.writeFileSync("./src/styles/index.aot.css", output);
    })
  });
