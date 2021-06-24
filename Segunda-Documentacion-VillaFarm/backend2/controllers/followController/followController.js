const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')

const Follow = require('../../models/Follow/Follow')
const { errorHandler} = require('../../helpers/dberrorHandler')

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) =>{
        // if(err){
        //     return res.status(401).json({
        //         error: 'Image could not be uploaded'
        //     })        
        // }

        const { id_usuario, id_usuario_seguido } = fields;
        let follow = new Follow(fields);

        follow.save((err, result) =>{
            if(err){
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })
    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    Follow.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data)
    })
}