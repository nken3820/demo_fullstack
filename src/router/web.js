import express from "express";
import homeControlller from "../controllers/homeControlller";

let router = express.Router();

let initwebRoutes = (app) => {

    router.get('/', homeControlller.getHomePage);

    return app.use("/", router);
}

module.exports = initwebRoutes;