import mongoose from "mongoose";
import AutoIncrementId from "./autoIncrementId";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    userId: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: {
        values: ["Allocation", "Admin", "Pre QC"],
        message:
          "Please provide one of the following values:=> Allocation, Admin",
      },
      required: [true, "role is required"],
    },
    status: {
      type: String,
      enum: {
        values: ["Active", "Inactive"],
        message:
          "Please provide one of the following values:=> Active, Inactive",
      },
      required: [true, "status is required"],
    },
    config: {
      leadView: {
        type: [String],
      },
      canAllocate: { type: Boolean, default: false },
      geography: { type: [String], default: [] },
    },
    team: [String],
  },
  { timestamps: true }
);

Schema.pre("save", async function (next) {
  if (!this.userId) {
    const autoIncId = await AutoIncrementId.findOneAndUpdate(
      { collectionName: "users" },
      { $inc: { value: 1 } }
    );

    this.userId = `P${autoIncId.value?.toString()?.padStart(5, "0")}`;
  }
  next();
});

const User = mongoose.models.User || mongoose.model("User", Schema);

export default User;
