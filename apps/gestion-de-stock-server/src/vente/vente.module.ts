import { Module } from "@nestjs/common";
import { VenteModuleBase } from "./base/vente.module.base";
import { VenteService } from "./vente.service";
import { VenteController } from "./vente.controller";
import { VenteResolver } from "./vente.resolver";

@Module({
  imports: [VenteModuleBase],
  controllers: [VenteController],
  providers: [VenteService, VenteResolver],
  exports: [VenteService],
})
export class VenteModule {}
