const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    // category: {
    //     type: String,
    //     required: true,
    // },
    // client: {
    //     type: String,
    //     required: true,
    // },
    // architects: {
    //     type: String,
    //     required: true,
    // },

    
    // description: {
    //     type: String,
    //     maxlength: 1000,
    //     minlength: 2,
    //     required: true,
    // },
    // generalPhoto: {
    //     type: String,
    //     required: true
    // },
    // multiplePhotos: {
    //     type: Array,
    //     required: false
    // },
    // threedPhotos: {
    //     type: Array,
    //     required: false
    // },
    // planPhotos: {
    //     type: Array,
    //     required: false
    // },
    // graphicPhotos: {
    //     type: Array,
    //     required: false
    // },
    // detailPhotos: {
    //     type: Array,
    //     required: false
    // },
    // floor_area: {
    //     type: String,
    //     maxlength: 10,
    //     minlength: 1,
    //     required: true,
    // },
    // location: {
    //     type: String,
    //     require: true,
    // },
    // date: {
    //     type: Date,
    //     default: Date.now()
    // },
    title: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true,
    },
})

module.exports = model('Post', schema)

