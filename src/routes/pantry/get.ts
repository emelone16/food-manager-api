import { Request, Response } from "express";
import { firestore } from "firebase-admin";
import { ApiResponse, sendResponse } from "types/apiResponse";
import { createUser } from "types/user";

const getPantry = async (
  docRef: firestore.DocumentReference
): Promise<ApiResponse> => {
  const doc = await docRef.get();

  if (!doc.exists) {
    return { status: 400, message: "UUID Does not exist." };
  } else {
    const user = createUser(doc.data());

    if (!user) {
      return { status: 400, message: "User cannot be created." };
    }

    return { status: 200, json: { pantry: user.pantry } };
  }
};

const getPantryHandler = (db: firestore.Firestore) => async (
  req: Request,
  res: Response
) => {
  const uuid: string = req.params.uuid;

  if (!uuid) {
    res.status(400).send("UUID Required");
    return;
  }

  const docRef = db.collection("users").doc(uuid);
  const response = await getPantry(docRef);

  sendResponse(res, response);
};

export default getPantryHandler;
