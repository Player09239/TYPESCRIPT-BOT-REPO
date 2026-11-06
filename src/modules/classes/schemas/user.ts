import {
    Schema,
    model
} from 'mongoose'

const UserSchema = new Schema(
    {
        _id: { type: String, required: true, unique: true },
        username: { type: string, required: true }
    }
)

const User = mongoose.model('user', UserSchema)
export default User
