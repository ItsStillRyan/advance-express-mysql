const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
    express.urlencoded({
        extended: false
    })
);

//importing routes
const landingRoutes = require('./routes/landing')
const coperateRoutes = require('./routes/coperate')
const productRoute = require('./routes/products')

async function main() {
    //if USL begin with a '/', use landingRoutes
    app.use('/', landingRoutes)
    app.use('/invest', coperateRoutes)
    app.use('/products', productRoute)

}

main();

app.listen(3000, () => {
    console.log("Server has started");
});