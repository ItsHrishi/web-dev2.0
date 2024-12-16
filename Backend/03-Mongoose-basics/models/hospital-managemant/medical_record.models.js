import mongoose from "mongoose";

const medicalRecordsSchema = mongoose.Schema({}, { timestamps: true });

export const MedicalRecords = mongoose.models(
  "MedicalRecords",
  medicalRecordsSchema
);
