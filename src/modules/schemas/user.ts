import {
    Schema,
    model
} from 'mongoose'

const UserSchema = new Schema(
    {
        _id: { type: String, required: true, unique: true },
        username: { type: String, required: true },

        coins: { type: Number, required: true, default: 0 },
        inventory: { type: Array, required: true, default: [] }
    }
)

const User = model('user', UserSchema)
export default User
