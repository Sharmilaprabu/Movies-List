const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "please enter product name"],
        },

        quantity: {
            type: Number,
            require: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);


const product = mongoose.model("product", productSchema);

module.exports = product;
