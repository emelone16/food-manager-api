import { Request, Response } from "express"

// Types
import { Backend } from "../../types"

const initializationRoutes = ({ app, db }: Backend) => {
  app.get("/", (req: Request, res: Response) => {
    const docRef = db.collection("users").doc("alovelace")

    const setAda = docRef.set({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })

    res.send("HELLO WORLD")
  })
}

export default initializationRoutes
