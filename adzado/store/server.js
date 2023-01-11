require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const next = require("next");
const routes = require("next-routes");
const port = process.env.PORT || 3000;
const Campaigns = require("./router/campaigns");
const user = require("./router/user");
const connectDB = require("./config/database");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

// handling uncaught excepation

process.on("uncaughtException", (err) => {
  console.log(`Error :${err.message}`);
  console.log(`Shutting down due to unhandled promise rejection `);
  process.exit(1);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// middleware for error
app.use(errorMiddleware);
const dev = process.env.NODE_ENV !== "production";
const server = next({ dev: true });
const nextRoutes = routes();
const routerHandler = nextRoutes.getRequestHandler(server);

server.prepare().then(() => {
  // import Routers
  app.use("/campaigns", Campaigns);
  app.use("/api", user);
  app.get("*", routerHandler);
  // connect to database
  connectDB();
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

//unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error :${err.message}`);
  console.log(`Shutting down due to unhandled promise rejection `);
  server.close(() => {
    process.exit(1);
  });
});
