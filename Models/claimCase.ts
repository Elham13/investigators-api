import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    caseType: {
      type: [String],
    },
    caseStatus: {
      type: String,
      enum: ["Accepted", "Rejected"],
      default: "Accepted",
    },
    alcoholAddiction: {
      type: [String],
    },
    tasksAssignedToQCReviewer: {
      type: [String],
    },
    preQcObservation: {
      type: String,
    },
    insuredPart: {
      type: String,
    },
    allocationType: {
      type: String,
    },
    documents: { type: {}, default: {} },
    investigator: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClaimInvestigator",
        default: null,
      },
    ],
    dashboardDataId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DashboardData",
      default: null,
    },
    intimationDate: {
      type: Date,
      default: null,
    },
    rejectionReason: { type: [String] },
    rejectionReasonRemarks: {},
    assignedBy: {
      type: String,
      enum: ["Admin", "Pre QC", "Allocation"],
    },
  },
  { timestamps: true }
);

const ClaimCase =
  mongoose.models.ClaimCase || mongoose.model("ClaimCase", Schema);

export default ClaimCase;
