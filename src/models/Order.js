import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
  pickupdate: {
    type: String,
    required: true,
  },
  pickuptime: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  persons: {
    type: String,
    required: true,
  },
  transfertype: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
export default models.Order || model("Order", orderSchema);
