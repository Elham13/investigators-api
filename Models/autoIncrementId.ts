import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true, "collectionName is required"],
    },
    value: {
      type: Number,
      required: [true, "value is required"],
      default: 0,
    },
  },
  { timestamps: true }
);

const AutoIncrementId =
  mongoose.models.AutoIncrementId || mongoose.model("AutoIncrementId", Schema);

export default AutoIncrementId;
