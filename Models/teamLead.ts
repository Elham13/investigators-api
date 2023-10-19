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
      required: [true, "phone number is required"],
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const TeamLead = mongoose.models.TeamLead || mongoose.model("TeamLead", Schema);

export default TeamLead;
