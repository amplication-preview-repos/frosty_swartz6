import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";
import { VenteTitle } from "../vente/VenteTitle";

export const ProduitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="nom" source="nom" />
        <NumberInput label="prix" source="prix" />
        <NumberInput step={1} label="quantité" source="quantit" />
        <ReferenceArrayInput
          source="stocks"
          reference="Stock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StockTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ventes"
          reference="Vente"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VenteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
