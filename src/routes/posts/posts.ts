import { Router } from 'express';

const posts = Router();

posts.get('/', (_, res) => {
    res.send('All posts!')
})

posts.get('/:id', (req, res) => {
    res.send('Post with id: ' + req.params.id)
});

posts.post('/', (req, res) => {
    res.send('Create post! ' + req.body)
});

posts.put('/:id', (req, res) => {
    res.send('Update post with id: ' + req.params.id)
});

posts.delete('/:id', (req, res) => {
    res.send('Delete post with id: ' + req.params.id)
});

posts.get('/created/:date', (req, res) => {
    res.send('Posts from date: ' + req.params.date)
});

posts.get('/author/:author', (req, res) => {
    res.send('Posts by author: ' + req.params.author)
});

export default posts;