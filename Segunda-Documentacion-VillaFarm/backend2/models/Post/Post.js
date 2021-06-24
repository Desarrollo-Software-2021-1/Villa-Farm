const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        id_usuario: {
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

module.exports = mongoose.model('Post',postSchema);