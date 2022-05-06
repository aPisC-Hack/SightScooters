import { Controller } from "../utils";
import { Route } from "../utils/decorators";

export default class AuthController extends Controller {
  @Route.Get('/')
  async test() {
    return { status: "OKkkk" }
  }
}
