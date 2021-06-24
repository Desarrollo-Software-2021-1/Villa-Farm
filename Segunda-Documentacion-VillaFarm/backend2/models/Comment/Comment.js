const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema(
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
        },
        content: {
            type: String,
            require: true,
            maxlength: 2000
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Comment',commentSchema);