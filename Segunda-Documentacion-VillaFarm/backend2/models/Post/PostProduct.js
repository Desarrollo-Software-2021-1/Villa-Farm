const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postproductSchema = new mongoose.Schema(
    {
        id_usuario: {
            type: ObjectId,
            ref: "User",
            require: true
        },
        nombre: {
            type: String,
            require: true,
            maxlength: 2000
        },
        empresa: {
            type: String,
            require: true,
            maxlength: 2000
        },
        ubicacion: {
            type: String,
            require: true,
            maxlength: 40
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('PostProduct',postproductSchema);