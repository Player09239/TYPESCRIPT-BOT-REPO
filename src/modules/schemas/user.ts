import {
    Schema,
    model
} from 'mongoose'

const UserSchema = new Schema(
    {
        _id: { type: String, required: true, unique: true },
        username: { type: string, required: true },

        coins: { type: number, required: true, default: 0 },
        inventory: { type: Array, required: true, default: [] }
    }
)

const User = mongoose.model('user', UserSchema)
export default User
