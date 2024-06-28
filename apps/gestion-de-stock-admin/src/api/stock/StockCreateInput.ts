import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type StockCreateInput = {
  date?: Date | null;
  produit?: ProduitWhereUniqueInput | null;
  quantit?: number | null;
};
