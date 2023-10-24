import { Request, Response } from "express";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) throw new Error("File upload failed");
    return res
      .status(200)
      .json({ success: true, message: "Good", data: req.file.path });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
