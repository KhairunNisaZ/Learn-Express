const { Schema, model, models } = require('mongoose')

const userSchema = new Schema ({
    email:{type: String, required: true},
    password:{type: String, required: true},
    createdAt:{type: Date, required:true, default: Date.now()},
})

const UserModel = models.User || model('user', userSchema)
module.exports = UserModel;