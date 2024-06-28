import * as graphql from "@nestjs/graphql";
import { VenteResolverBase } from "./base/vente.resolver.base";
import { Vente } from "./base/Vente";
import { VenteService } from "./vente.service";

@graphql.Resolver(() => Vente)
export class VenteResolver extends VenteResolverBase {
  constructor(protected readonly service: VenteService) {
    super(service);
  }
}
