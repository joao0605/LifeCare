
import getMongoCollection from '../database/db'
import { getMongooseUserStudentModel } from '@/models/Seller';
import { getMongooseFormModel } from "../models/Form.js";
import { ObjectId } from 'mongodb';
import connectDB from '@/database/db-mongoose';



// Cria um novo user já com os dados
async function newStudentUser(req, res) {
    try {
        connectDB()
        const userData = req.body;
        const newUser = await UserStudent.create(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
// Cria vários users já com os dados
async function newStudentUsers(req, res) {
    try {
        connectDB()
        const userData = req.body;
        const newUser = await UserStudent.insertMany(userData)

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Apaga todos os formulários
async function deleteStudentUsers(req, res) {
    try {
        connectDB()
        const del = await UserStudent.deleteMany();

        return res.status(200).json(del);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Obtém todos os formulários
async function getStudentUsers(req, res) {

    try {
        connectDB()
        const Model = getMongooseUserStudentModel()


        const users = await Model.find().exec()

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Obtém o formulário do dia do aluno
async function getDailyForm(req, res) {
  

    try {
        connectDB();
    
        const studentId = req.query.studentId;
        const date = new Date(req.query.date);
        console.log(date, studentId)
        const Student = getMongooseFormModel();
    
        const dailyForms = await Student.findOne({
          studentId: studentId,
          date: { $gte: date, $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000) }
        });
        
        console.log(dailyForms)
        res.status(200).json(dailyForms);
      
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getStudentUsersById(id) {
    try {
        connectDB()
        const model = getMongooseUserStudentModel()
        const user = await model.findById({ _id: new ObjectId(id) }).exec();
        return user;
    } catch (error) {
        console.log(error)
    }
}

async function updateStudentData(id) {
    try {
        connectDB()
        const model = getMongooseUserStudentModel()
        const updatedUser = await model.findByIdAndUpdate({ _id: new ObjectId(id) }, req.body, {
            new: true,
        }).exec();

        return updatedUser;
    } catch (error) {
        console.log(error)
    }
}




export { newStudentUser, newStudentUsers, deleteStudentUsers, getStudentUsers, getStudentUsersById, getDailyForm, updateStudentData }