/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsInt,
  ValidateNested,
} from "class-validator";
import { StockUpdateManyWithoutProduitsInput } from "./StockUpdateManyWithoutProduitsInput";
import { Type } from "class-transformer";
import { VenteUpdateManyWithoutProduitsInput } from "./VenteUpdateManyWithoutProduitsInput";

@InputType()
class ProduitUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prix?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantit?: number | null;

  @ApiProperty({
    required: false,
    type: () => StockUpdateManyWithoutProduitsInput,
  })
  @ValidateNested()
  @Type(() => StockUpdateManyWithoutProduitsInput)
  @IsOptional()
  @Field(() => StockUpdateManyWithoutProduitsInput, {
    nullable: true,
  })
  stocks?: StockUpdateManyWithoutProduitsInput;

  @ApiProperty({
    required: false,
    type: () => VenteUpdateManyWithoutProduitsInput,
  })
  @ValidateNested()
  @Type(() => VenteUpdateManyWithoutProduitsInput)
  @IsOptional()
  @Field(() => VenteUpdateManyWithoutProduitsInput, {
    nullable: true,
  })
  ventes?: VenteUpdateManyWithoutProduitsInput;
}

export { ProduitUpdateInput as ProduitUpdateInput };
