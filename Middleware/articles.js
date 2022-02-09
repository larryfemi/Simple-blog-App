function SaveAndEditArticle(path) {
	return async (req, res) => {
		let article = req.article
		article.title = req.body.title
		article.description = req.body.description
		article.markdown = req.body.markdown
		try {
			article = await article.save()
			res.redirect(`articles/${article.id}/${article.slug}`)
		} catch (error) {
			console.log(error)
			res.render(`articles/${path}`, { article: article })
		}
	}
}

function EditArticle(path) {
	return async (req, res) => {
		let article = req.article
		article.title = req.body.title
		article.description = req.body.description
		article.markdown = req.body.markdown
		try {
			article = await article.save()
			res.redirect(`${article.id}/${article.slug}`)
		} catch (error) {
			console.log(error)
			res.render(`articles/${path}`, { article: article })
		}
	}
}

module.exports = {
	SaveAndEditArticle,
	EditArticle,
}
