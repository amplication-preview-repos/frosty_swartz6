import { SortOrder } from "../../util/SortOrder";

export type VenteOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  produitId?: SortOrder;
  quantit?: SortOrder;
  updatedAt?: SortOrder;
};
