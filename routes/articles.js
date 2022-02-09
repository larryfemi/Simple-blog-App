const { ObjectId } = require("bson")
const express = require("express")
const router = express.Router()
const { SaveAndEditArticle, EditArticle } = require("./../Middleware/articles")

const {
	NewBlogPost,
	CreateBlogPost,
	DeleteBlogPost,
	UpdateBlogPost,
	ViewBlogPost,
	EditBlogPost,
} = require("./../controllers/articles")

router.get("/new", NewBlogPost)

router.get("/edit/:id", EditBlogPost)

router.get("/:id/:slug", ViewBlogPost)

router.patch("/:id", UpdateBlogPost, EditArticle("edit"))

router.post("/", CreateBlogPost, SaveAndEditArticle("new"))

router.delete("/:id", DeleteBlogPost)

module.exports = router
