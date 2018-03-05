const mongoose = require('mongoose');
const StudentModel = require('../models/student');

module.exports.fetchAll = () => {
    return StudentModel.find({}).lean().exec();
}

module.exports.fetchById = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    return StudentModel.findOne({ _id: id }).lean().exec();
}

module.exports.create = (student) => {
    return StudentModel.create(student);
}

module.exports.update = (id, student) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    return StudentModel.findOneAndUpdate({ _id: id }, student, { new: true });
}

module.exports.delete = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

    return StudentModel.remove({ _id: id }).exec();
}
