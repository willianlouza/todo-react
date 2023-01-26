import App from "./app";
import env from "./app/config/env";
import mongoose from "mongoose";

const PORT = env.PORT;
const CONNECTION_URL = env.DB_CONNECTION_STRING;

mongoose.set("strictQuery", true);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    new App().server.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
  })
  .catch((err) => console.log(err.message));
