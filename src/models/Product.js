import { model, Schema } from 'mongoose'

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    startAt: {
      type: Date,
    },
    endAt: {
      type: Date,
    },
    bidTime: {
      type: Number,
    },
    bidPriceMax: {
      type: Number,
      default: 0,
    },
    bids: {
      type: [Schema.Types.ObjectId],
      ref: 'Bid',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export default model('Product', schema)
