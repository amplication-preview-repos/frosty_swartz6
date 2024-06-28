import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FactureTitle } from "../facture/FactureTitle";
import { ProduitTitle } from "../produit/ProduitTitle";

export const VenteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceArrayInput
          source="factures"
          reference="Facture"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FactureTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="produit.id" reference="Produit" label="Produit">
          <SelectInput optionText={ProduitTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantité" source="quantit" />
      </SimpleForm>
    </Edit>
  );
};
