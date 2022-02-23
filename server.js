const express = require('express')
const articleRouter = require('./routes/article.routes')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://dbErvinas:dbSlaptazodis@cluster0.pyakb.mongodb.net/markdownBlog?retryWrites=true&w=majority")
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    let articles = [{
        'title': 'Article1',
        'description': 'Article description',
        'createdAt': new Date(),
        'markdow': 'This is the markdown',
    },
    {
        'title': 'Article2',
        'description': 'Article2 description',
        'createdAt': new Date(),
        'markdow': 'This is the markdown',
    },
]

    res.render('index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000, console.log('Listening on port: 5000'))