const studentsService = require('../services/students');

module.exports.fetchAll = (req, res) => {
    res.status(200).json(studentsService.fetchAll());
};

module.exports.fetchOne = (req, res) => {
    const student = studentsService.fetchById(req.params.id)

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({
            error: 404,
            message: 'Not Found'
        });
    }
};

module.exports.create = (req, res) => {
    res.status(201).json(Object.assign({}, req.body, {
        id: (students.length + 1).toString(),
    }));
};

module.exports.update = (req, res) => {
    res.status(200).json(req.body);
};

module.exports.delete = (req, res) => {
    res.status(204).send();
};
