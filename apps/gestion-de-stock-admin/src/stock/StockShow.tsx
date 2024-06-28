import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUIT_TITLE_FIELD } from "../produit/ProduitTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Produit" source="produit.id" reference="Produit">
          <TextField source={PRODUIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantité" source="quantit" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
