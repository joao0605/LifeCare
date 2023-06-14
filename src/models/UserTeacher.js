import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registration: { type: String, required: true },
    birthdate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    birthdate: { type: Date },
    schoolId: { type: String, required: true },
    courseId: { type: String, required: true },
});



export function getMongooseUserTeacherModel() {
    if (mongoose.modelNames().includes("UserTeacher")) {
        return mongoose.models.UserTeacher
    } else {
        return mongoose.model("UserTeacher", teacherSchema)
    }
} 