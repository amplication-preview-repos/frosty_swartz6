import { FactureUpdateManyWithoutVentesInput } from "./FactureUpdateManyWithoutVentesInput";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type VenteUpdateInput = {
  date?: Date | null;
  factures?: FactureUpdateManyWithoutVentesInput;
  produit?: ProduitWhereUniqueInput | null;
  quantit?: number | null;
};
