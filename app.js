const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const livroRouter = require('./routes/livros');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/livros', livroRouter);

app.listen(3030, () => {
    console.log('servidor rodando na porta 3030');
});
