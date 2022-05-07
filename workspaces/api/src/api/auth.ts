import { Controller } from "../utils";
import { Route } from "../utils/decorators";
import { ILandmark } from "common";

export default class AuthController extends Controller {
  @Route.Get("/")
  async test() {
    return { status: "OKkkk" };
  }

  @Route.Get()
  async landmark(): Promise<ILandmark> {
    return {
      ratingCount: 500,
      time: 30,
      address: "",
      coordinate: { latitude: 0, longitude: 0 },
      description: "",
      id: "24185c1d-d9c3-4fe8-8102-3577447832f0",
      name: "",
      pictures: [],
      rating: 5,
    };
  }
}
