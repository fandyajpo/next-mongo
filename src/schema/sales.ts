import { Schema, model, Document, models } from "mongoose";

export const SalesSchema = new Schema<SalesInterface>({
  username: String,
  password: String,
});

export const SaleslModel =
  models.Sales || model<SalesInterface & Document>("Sales", SalesSchema);

export interface SalesInterface {
  _id: string;
  username?: string;
  password?: string;
}
