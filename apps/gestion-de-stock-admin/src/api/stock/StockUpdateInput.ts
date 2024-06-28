import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type StockUpdateInput = {
  date?: Date | null;
  produit?: ProduitWhereUniqueInput | null;
  quantit?: number | null;
};
