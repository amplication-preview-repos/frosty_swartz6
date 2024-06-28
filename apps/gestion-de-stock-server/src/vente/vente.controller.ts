import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VenteService } from "./vente.service";
import { VenteControllerBase } from "./base/vente.controller.base";

@swagger.ApiTags("ventes")
@common.Controller("ventes")
export class VenteController extends VenteControllerBase {
  constructor(protected readonly service: VenteService) {
    super(service);
  }
}
