import { SortOrder } from "../../util/SortOrder";

export type FactureOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  montantTotale?: SortOrder;
  updatedAt?: SortOrder;
  venteId?: SortOrder;
};
