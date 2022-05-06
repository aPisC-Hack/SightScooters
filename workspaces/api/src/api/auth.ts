import { Controller } from "../utils";
import { Route } from "../utils/decorators";
import {Landmark} from 'common'

export default class AuthController extends Controller {
  @Route.Get('/')
  async test() {
    return { status: "OKkkk" }
  }

  @Route.Get()
  async landmark(): Promise<Landmark> {
    return {
      address: "",
      coordinates: [0, 0],
      description: "", 
      id: "24185c1d-d9c3-4fe8-8102-3577447832f0",
      name: "",
      pictures: [],
      rating: 5
    }
  }
}
