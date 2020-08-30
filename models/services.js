const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        en: {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        ru: {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        am: {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Service',schema);