import dotenv from "dotenv";
dotenv.config();
const env = {
  PORT: process.env.PORT as string,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING as string,
};

export default env;
