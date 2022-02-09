const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Article = require("./models/articles");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true });

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/articles", articleRouter);

app.get("/", async (req, res) => {
	const articles = await Article.find().sort({ createdAt: "desc" });
	res.render("index", { articles: articles });
});

app.listen(port, console.log(`Server is listening from port ${port}...`));
