import { Schema, model, models, Document } from "mongoose";

export const TeamSchema = new Schema<TeamInterface>({
  name: String,
  address: String,
});

export const TeamlModel =
  models.Teams || model<TeamInterface & Document>("Teams", TeamSchema);

export interface TeamInterface {
  _id: string;
  name?: string;
  address?: string;
}
