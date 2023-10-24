import { Request, Response } from "express";

export const temp = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ success: true, message: "Fetched", data: [] });
  } catch (error: any) {
    return res.status(500).json({ success: true, message: error.message });
  }
};
