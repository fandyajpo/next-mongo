import { Schema, model, models } from "mongoose";

export const DealerSchema = new Schema<DealerInterface>(
  {
    name: String,
    address: String,
  },
  { strict: false }
);

export const DealerlModel =
  models.Dealers || model<DealerInterface & Document>("Dealers", DealerSchema);

export interface DealerInterface {
  _id?: string;
  name?: string;
  address?: string;
}
