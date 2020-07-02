import { Response } from "express";

export interface ApiResponse {
  status: number;
  message?: string;
  json?: any;
}

export const sendResponse = (res: Response, response: ApiResponse) => {
  if (response.message) {
    res.status(response.status).send(response.message);
    return;
  }

  if (response.json) {
    res.status(response.status).json(response.json);
    return;
  }
};
