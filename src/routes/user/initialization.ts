import { Request, Response } from "express"

// Types
import { Backend } from "types/backend"

const initializationRoutes = ({ app, db }: Backend) => {
  app.post("/user", (req: Request, res: Response) => {
    console.log(req.body)
    res.status(200).send("good")
  })

  // app.get("/", (req: Request, res: Response) => {
  //   const docRef = db.collection("users").doc("alovelace")

  //   const setAda = docRef.set({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   })

  //   res.send("HELLO WORdddLD")
  // })
}

export default initializationRoutes
