import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";
import { Controller } from "../utils";
import { Route } from "../utils/decorators";
import { Map } from "../utils/decorators/mappers";

export default class TourController extends Controller {
  @Route.Get("/")
  async index() {
    return "asdasd";
  }

  @Route.Get("/:id")
  async getOne(@Map.Param("id") id: number): Promise<TourModel | null> {
    return await TourModel.findOne({
      where: { id: id },
      include: [LandmarkModel],
    });
  }
}
