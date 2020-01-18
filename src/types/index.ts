import { Express } from "express"
import { firestore } from "firebase-admin"

export interface Backend {
  app: Express
  db: firestore.Firestore
}
