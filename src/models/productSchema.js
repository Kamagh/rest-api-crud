const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please add some text..."],
    },
    price: {
        type: Number,
        required: [true, "Please add some price"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);