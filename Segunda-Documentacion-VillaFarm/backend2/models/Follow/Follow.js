const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const followSchema = new mongoose.Schema(
    {
        id_usuario: {
            type: ObjectId,
            ref: "User",
            require: true
        },
        id_usuario_seguido: {
            type: ObjectId,
            ref: "User",
            require: true
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Follow',followSchema);