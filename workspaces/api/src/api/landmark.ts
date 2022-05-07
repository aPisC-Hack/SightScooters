import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";
import { Controller } from "../utils";
import { Route } from "../utils/decorators";
import { Map } from "../utils/decorators/mappers";

export default class LandmarkController extends Controller {
  @Route.Get("/:id")
  async getOne(@Map.Param("id") id: number): Promise<LandmarkModel | null> {
    return await LandmarkModel.findOne({
      where: { id: id },
    });
  }

  @Route.Get("/")
  async getAll(): Promise<LandmarkModel[]> {
    return await LandmarkModel.findAll({});
  }
}
