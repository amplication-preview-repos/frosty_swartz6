import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  produitId?: SortOrder;
  quantit?: SortOrder;
  updatedAt?: SortOrder;
};
