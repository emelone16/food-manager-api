import { Request, Response } from "express";
import { firestore } from "firebase-admin";
import { Backend } from "../../types/backend";
import { createUser, User } from "../../types/user";

const userExists = async (
  userRef: firestore.CollectionReference,
  user: User
): Promise<boolean> => {
  const usernameFilter = userRef.where("username", "==", user.username).get();
  const emailFilter = userRef.where("email", "==", user.email).get();

  const [usernameSnapshot, emailSnapshot] = await Promise.all([
    emailFilter,
    usernameFilter
  ]);

  return usernameSnapshot.empty === false || emailSnapshot.empty === false;
};

const initializeUserRoute = (db: firestore.Firestore) => (
  req: Request,
  res: Response
) => {
  const user = createUser(req.body);

  if (!user) {
    res.status(400).send("Missing required parameter.");
    return;
  }

  // Query to see if user exists already
  const userRef = db.collection("users");
  userExists(userRef, user)
    .then(result => {
      if (result) {
        res.status(400).send("User already exists.");
        return;
      } else {
        userRef.doc().set(user);
        res.status(200).send("Success.");
        return;
      }
    })
    .catch(err => {
      console.log("Firebase error: " + err);
      res.status(500).send("Error with firebase.");
    });
};

const initializationRoutes = ({ app, db }: Backend) => {
  app.post("/user", initializeUserRoute(db));
};

export default initializationRoutes;
