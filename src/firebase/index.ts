import admin, { ServiceAccount } from "firebase-admin"
import serviceAccount from "../../serviceAccountKey.json"

export const setupDatabase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
  })
  return admin.firestore()
}
