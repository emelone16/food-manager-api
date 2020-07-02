import { Request, Response } from "express";
import { firestore } from "firebase-admin";
import { ApiResponse, sendResponse } from "../../types/apiResponse";
import { createPantryItem, PantryItem } from "../../types/pantry";
import { createUser } from "../../types/user";

const removePantryItem = async (
  docRef: firestore.DocumentReference,
  item: PantryItem
): Promise<ApiResponse> => {
  const doc = await docRef.get();

  if (doc.exists) {
    const user = createUser(doc.data());

    if (!user) {
      return { status: 400, message: "Could not create user" };
    }

    const candidate = user.pantry.find(i => i.name === item.name);

    // If no candidate, no work to be done
    if (candidate) {
      const index = user.pantry.indexOf(candidate);
      user.pantry[index].amount -= item.amount;

      if (user.pantry[index].amount <= 0) {
        user.pantry.splice(index, 1);
      }

      docRef.update({
        pantry: user.pantry
      });
    }

    return { status: 200, message: "Success" };
  } else {
    return { status: 400, message: "User does not exist." };
  }
};

const deletePantryHandler = (db: firestore.Firestore) => async (
  req: Request,
  res: Response
) => {
  const uuid = req.params.uuid;
  const item = createPantryItem(req.body.item);

  if (!uuid) {
    res.status(400).send("UUID Required");
    return;
  }

  if (!item) {
    res.status(400).send("Pantry Item could not be properly created");
    return;
  }

  const docRef = db.collection("users").doc(uuid);
  const response = await removePantryItem(docRef, item);

  sendResponse(res, response);
};

export default deletePantryHandler;
