import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phoneNo: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const ClusterManager =
  mongoose.models.ClusterManager || mongoose.model("ClusterManager", Schema);

export default ClusterManager;
