const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
app.use('/img',express.static(__dirname + 'views/articles/img'))
mongoose.connect('mongodb://localhost/kyrsovnews', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})
app.get('/contact', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/contact', { articles: articles })
})

app.get('/news', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/news', { articles: articles })
})
app.get('/admin', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/admin', { articles: articles })
})


app.use('/articles', articleRouter)

app.listen(5000)
