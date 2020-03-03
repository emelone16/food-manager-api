import { Backend } from "types/backend"

const listen = ({ app, port }: Backend) => {
  app.listen(port, (err: Error) => {
    if (err) {
      console.error(err)
    } else {
      console.log("Started food-api-manager on " + port)
    }
  })
}

export default listen
