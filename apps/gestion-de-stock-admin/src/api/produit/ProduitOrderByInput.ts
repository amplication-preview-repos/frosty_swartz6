import { SortOrder } from "../../util/SortOrder";

export type ProduitOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  prix?: SortOrder;
  quantit?: SortOrder;
  updatedAt?: SortOrder;
};
