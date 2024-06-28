import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VenteTitle } from "../vente/VenteTitle";

export const FactureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="montantTotale" source="montantTotale" />
        <ReferenceInput source="vente.id" reference="Vente" label="Vente">
          <SelectInput optionText={VenteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
