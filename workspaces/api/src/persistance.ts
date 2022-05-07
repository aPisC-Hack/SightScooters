import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import LandmarkModel from "./models/landmark.model";
import TourModel from "./models/tour.model";
import fs from "fs";
import path from "path";

export async function bootstrap(options: SequelizeOptions) {
  const sequelize = new Sequelize(options);
  await sequelize.authenticate();
  await sequelize.sync();

  // Load data directory
  console.log("Loading data files");
  const files = fs
    .readdirSync(path.join(__dirname, "/data"))
    .sort()
    .filter((file) => file.indexOf(".") !== 0)
    .filter(
      (file) =>
        file.endsWith(".js") ||
        (file.endsWith(".ts") && !file.endsWith(".d.ts"))
    );

  for await (const file of files) {
    try {
      console.log("  Loading file:", file);
      const dataLoader = require(path.join(__dirname, "/data", file));
      await dataLoader.default();
    } catch (err: any) {
      console.error(err);
    }
  }

  return sequelize;
}
