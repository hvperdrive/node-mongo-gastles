const studentsService = require('../services/students');

module.exports.fetchAll = (req, res) => {
    studentsService.fetchAll().then((students) => {
        res.status(200).json(students);
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

module.exports.fetchOne = (req, res) => {
    studentsService.fetchById(req.params.id).then((student) => {
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

module.exports.create = (req, res) => {
    studentsService.create(req.body).then((student) => {
        res.status(201).json(student);
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

module.exports.update = (req, res) => {
    studentsService.update(req.params.id, req.body).then((student) => {
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    });
};

module.exports.delete = (req, res) => {
    studentsService.delete(req.params.id).then((response) => {
        if (response && response.n > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }
    }, (err) => {
        res.status(500).json({
            message: err.message,
        });
    })
    
};
