import { Request, Response } from "express";
import DashboardData from "../../../Models/dashboardData";

export const getFniData = async (req: Request, res: Response) => {
  try {
    const data = await DashboardData.find({}).limit(10);
    const count = await DashboardData.countDocuments();
    return res
      .status(200)
      .json({ success: true, message: "Fetched", data, count });
  } catch (error: any) {
    return res.status(500).json({ success: true, message: error.message });
  }
};
