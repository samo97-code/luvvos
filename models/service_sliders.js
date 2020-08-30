const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
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
        image_uncolor: {
            type: String,
            required: true
        },
        image_color: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('ServiceSlider',schema,'service_sliders');