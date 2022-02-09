const Article = require("./../models/articles")

const NewBlogPost = (req, res) => {
	res.render("./articles/new", { article: new Article() })
}

const ViewBlogPost = async (req, res) => {
	const article = await Article.findOne({ _id: req.params.id })
	if (article == null) res.redirect("/")
	res.render("articles/show", { article: article })
}

const CreateBlogPost = async (req, res, next) => {
	req.article = new Article()
	next()
}

const EditBlogPost = async (req, res) => {
	const article = await Article.findOne({ _id: req.params.id })
	res.render("./articles/edit", { article: article })
}

const UpdateBlogPost = async (req, res, next) => {
	req.article = await Article.findById(req.params.id)
	next()
}

const DeleteBlogPost = async (req, res) => {
	try {
		await Article.findByIdAndDelete(req.params.id)
		res.redirect("/")
	} catch (error) {
		console.log(error)
	}
}

//  const articleId = req.params.id
// const { title, description, markdown } = req.body
// const articleQuery = req.body
// try {
// 	const article = await Article.findOneAndUpdate({ articleQuery })
// 	if (title) article.title = title
// 	if (description) article.description = description
// 	if (markdown) article.markdown = markdown
// 	res.render(`articles/show`, { article: article })
// res.send(`Article with ID: ${req.params.id} has been updated`)
// } catch (error) {
// 	console.log(error)
// 	res.redirect("./articles/edit")
// }

module.exports = {
	NewBlogPost,
	CreateBlogPost,
	DeleteBlogPost,
	UpdateBlogPost,
	ViewBlogPost,
	EditBlogPost,
}
