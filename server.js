const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações",
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar",
        },
        {
            title: "M",
            message: "uito fácil de usar",
        },
        {
            title: "A",
            message: "morzinho",
        },
        {
            title: "I",
            message: "nstall EJS",
        },
        {
            title: "S",
            message: "intaxe simples",
        },
    ];

    const subtitle = "Linguagem de modelagem";

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle,
    });
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(8080);
console.log("Server is running!");
