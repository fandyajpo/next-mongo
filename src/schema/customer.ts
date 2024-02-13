import { Schema, model, Document, models } from "mongoose";

export const CustomerSchema = new Schema<CustomerInterface>({
  address: String,
  description: String,
  phone: String,
  source: String,
});

export const CustomerlModel =
  models.Customers ||
  model<CustomerInterface & Document>("Customers", CustomerSchema);

export interface CustomerInterface {
  _id?: string;
  address?: string;
  phone?: string;
  source?: string;
  description?: string;
}
