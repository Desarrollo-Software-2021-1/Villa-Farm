const Usuario = require('../models/Usuario')
const{ errorHandler } = require('../helpers/dberrorHandler')

exports.create = (req, res) => {
    const usuario = new Usuario(req.body)
    usuario.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.list = (req, res) => {
    Usuario.find().exec((err, data) => {
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data);
    })
}