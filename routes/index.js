module.exports = app => {

  // Base routes
  const baseRoutes = require("./base.routes");
  app.use("/", baseRoutes);

  const authRoutes = require("./auth.routes");
  app.use("/auth", authRoutes);

  const travelRoutes = require("./travel.routes");
  app.use("/travel", travelRoutes);
}

//TO DO
