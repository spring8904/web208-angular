import { model, Schema } from 'mongoose'

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    price: {
      type: Number,
      required: true,
    },
    isWinBid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export default model('Bid', schema)
