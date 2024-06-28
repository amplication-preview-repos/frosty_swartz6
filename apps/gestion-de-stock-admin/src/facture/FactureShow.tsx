import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VENTE_TITLE_FIELD } from "../vente/VenteTitle";

export const FactureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="montantTotale" source="montantTotale" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vente" source="vente.id" reference="Vente">
          <TextField source={VENTE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
