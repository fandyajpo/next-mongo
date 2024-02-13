import { Schema, model, models, Document } from "mongoose";
import { SalesInterface } from "./sales";
import { TeamInterface } from "./team";
import { AuditInterface } from "@/types";

export const ProspectSchema = new Schema<ProspectInterface>({
  customer: String,
  address: String,
  phone: String,
  source: String,
  description: String,
  sales: {
    ref: "Sales",
    type: Schema.Types.ObjectId,
  },
  dealer: {
    ref: "Dealers",
    type: Schema.Types.ObjectId,
  },
  team: {
    ref: "Teams",
    type: Schema.Types.ObjectId,
  },
  createdAt: String,
  createdBy: String,
  updateAt: String,
  updateBy: String,
});

export const ProspectlModel =
  models.Prospects ||
  model<ProspectInterface & Document>("Prospects", ProspectSchema);

export interface ProspectInterface extends AuditInterface {
  _id?: string;
  dealer?: string;
  team?: TeamInterface;
  sales?: SalesInterface;
  customer?: string;
  address?: string;
  phone?: string;
  source?: string;
  description?: string;
}
