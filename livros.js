const express = require ('express');
const router = express.Router();
const Livro = require('../modelo/livro-schema');

router.get('/', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.json(livros);
    }   catch (err) {
        res.status(500).json({ message: err.message});
    }  
});

router.post('/', async (req, res) => {
    const livro = new livro({
        titulo: req.body.titulo,
        autor: req.body.autor,
        https://eus-www.sway-cdn.com/s/W3QP981juMlvGPIv/images/hUJFsgHop5h0kf?quality=706&allowAnimation=true&embeddedHost=true

});

try {
    const novoLivro = await livro.save();
    res.status(201).json(novoLivro);
}   catch (err) {
    res.status(400).json({ message: err.message });
}    
    
});

router.delete('/:id', async (req, res) => {
    try {
        await Livro.findByIdAndDelete(req.params.id);
        res.json({ message: 'Livro deletado' });
    {   catch (err) }
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;



