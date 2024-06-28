import { FactureCreateNestedManyWithoutVentesInput } from "./FactureCreateNestedManyWithoutVentesInput";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type VenteCreateInput = {
  date?: Date | null;
  factures?: FactureCreateNestedManyWithoutVentesInput;
  produit?: ProduitWhereUniqueInput | null;
  quantit?: number | null;
};
