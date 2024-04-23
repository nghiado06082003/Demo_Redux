var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(cors())

let posts = [
    { id: 1, title: 'Bao nhiêu lâu thì bán được 1 tỷ gói mè', content: 'Hỏi mấy ông đa cấp ấy' },
    { id: 2, title: '14 tỷ', content: 'Nước lũ' },
    { id: 3, title: 'Liêm kiếm tiền rất giỏi', content: 'Sang Ả Rập thôi' }
]

let currentID = 3
const getID = () => {
    currentID++
    return currentID
}

app.get("/api/posts", (req, res) => {
    res.json(posts.map(post => ({ id: post.id, title: post.title })))
})

app.get("/api/posts/:postId", (req, res) => {
    res.json(posts.find(post => post.id == req.params.postId))
})

app.post("/api/posts", (req, res) => {
    const post = {
        id: getID(),
        title: req.body.title,
        content: req.body.content
    }
    posts.push(post)
    res.json(post)
})

app.put("/api/posts/:postId", (req, res) => {
    const post = posts.find(post => post.id == req.params.postId)
    if (post) {
        post.title = req.body.title
        post.content = req.body.content
    }
    res.json(posts.find(post => post.id == req.params.postId))
})

app.delete("/api/posts/:postId", (req, res) => {
    posts = posts.filter(post => post.id != req.params.postId)
    res.json()
})

app.listen(8080, () => { console.log("Running on port 8080") });