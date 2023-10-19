import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    totalRecords: {
      type: Number,
    },
    insertedRecords: {
      type: Number,
    },
    skippedRecords: {
      type: Number,
    },
    skippedClaimIds: {
      type: [String],
    },
    skippedReasons: {
      type: [String],
    },
  },
  { timestamps: true }
);

const DashboardFeedingLog =
  mongoose.models.DashboardFeedingLog ||
  mongoose.model("DashboardFeedingLog", Schema);

export default DashboardFeedingLog;
