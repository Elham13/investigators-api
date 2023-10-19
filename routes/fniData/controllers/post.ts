import { Request, Response } from "express";
import fs from "fs";
import { data } from "../../../dashboard";
import DashboardData from "../../../Models/dashboardData";

export const updateFniData = async (req: Request, res: Response) => {
  try {
    // const data = await DashboardData.find({});

    const data1 = data.map((obj: any) => {
      const tempObj = {
        ...obj,
        contractDetails: obj.contractDetaials,
        claimDetails: {
          ...obj.claimDetails,
          deductibleAmount: obj.claimDetails.deductableAmmount,
        },
        hospitalDetails: {
          ...obj.hospitalDetails,
          pinCode: obj.hospitalDetails.pincode,
        },
        historicalClaim: obj?.historicalClaim?.map((obj1: any) => {
          return {
            ...obj1,
            history: obj1?.history?.map((el: any) => {
              const tempEl = { ...el, claimAmount: el.claimAmmount };
              delete tempEl?.claimAmmount;
              return tempEl;
            }),
          };
        }),
      };
      delete tempObj["contractDetaials"];
      delete tempObj.claimDetails.deductableAmmount;
      delete tempObj.hospitalDetails.pincode;
      return tempObj;
    });
    const filePath = "data.json";
    const jsonData = JSON.stringify(data1, null, 2);

    fs.writeFile(filePath, jsonData, "utf8", (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log("JSON file has been written successfully.");
      }
    });
    return res.status(200).json({ success: true, message: "Hello" });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
