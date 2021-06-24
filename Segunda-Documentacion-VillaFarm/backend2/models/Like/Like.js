const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const likeSchema = new mongoose.Schema(
    {
        id_usuario: {
            type: ObjectId,
            ref: "User",
            require: true
        },
        id_publicacion: {
            type: ObjectId,
            ref: "User",
            require: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Like',likeSchema);