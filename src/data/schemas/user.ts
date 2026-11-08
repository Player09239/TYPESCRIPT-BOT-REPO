import {
    Schema,
    model
} from 'mongoose'

const UserSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        username: { type: String, required: true },

        coins: { type: Number, required: true, default: 0 },
        inventory: { type: Array, required: true, default: [] },

        slots: {
            head: { type: Object, default: null },
            chest: { type: Object, default: null },
            legs: { type: Object, default: null },
            foot: { type: Object, default: null }
        }
    }
)

const User = model('user', UserSchema)
export default User
