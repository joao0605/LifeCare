import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now() },
    breakfast: { type: String, min: 0, max: 5, required: true },
    nap: { type: String, min: 0, max: 5, required: true },
    lunch: { type: String, min: 0, max: 5, required: true },
    pee: { type: String, required: true },
    poop: { type: String, required: true },
    observations: { type: String },
    teacherId: { type: String, required: true },
    studentId: { type: String, required: true },
    courseId: { type: String, required: true }
});


export function getMongooseFormModel() {
    if (mongoose.modelNames().includes("Form")) {
        return mongoose.models.Form
    } else {
        return mongoose.model("Form", formSchema)
    }
} 


