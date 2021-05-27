const mongoose1 = require("mongoose");


const usuarioSchema = new mongoose1.Schema(
  {
    usuario: {
      type: String,
      trim: true,
      require: true,
      maxlength: 64,
    },
    password: {
      type: String,
      trim: true,
      require: false,
      maxlength: 64,
    }
  },
  { timestamps: true }
);

module.exports = mongoose1.model("Usuario", usuarioSchema);
