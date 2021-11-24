module.exports = app => {

  // Base routes

  const baseRoutes = require("./base.routes");
  app.use("/", baseRoutes);

  const authRoutes = require("./auth.routes");
  app.use("/auth", authRoutes);

  const placeRoutes = require("./place.routes");
  app.use("/place", placeRoutes);

<<<<<<< HEAD
=======
  const pointRoutes = require("./point.routes");
  app.use("/point", pointRoutes);

>>>>>>> 1e6e6be53517ba90e90a72844ba43cabd80cd9a9
  const profileRoutes = require("./profile.routes");
  app.use("/profile", profileRoutes);

}

//TO DO
