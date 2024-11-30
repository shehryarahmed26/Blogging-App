const { default: mongoose, Schema } = require("mongoose");

const blogschema = new Schema({
    title: String,
    body: String,
    author: String,
}, {
    timestamps: true
})
const blogmodel = mongoose.models.blogs || mongoose.model('blogs', blogschema)
export default    blogmodel