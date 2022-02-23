const express = require('express')
const articleRouter = require('./routes/article.routes')
const mongoose = require('mongoose')
const Article = require('./models/article')
const methodOverride = require('method-override')

mongoose.connect("mongodb+srv://dbErvinas:dbSlaptazodis@cluster0.pyakb.mongodb.net/markdownBlog?retryWrites=true&w=majority")
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    let articles = await Article.find().sort({ createdAt: 'desc' })

    res.render('index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000, console.log('Listening on port: 5000'))