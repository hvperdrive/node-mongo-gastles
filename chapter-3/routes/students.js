const studentsController = require('../controllers/students');

module.exports = (app) => {
    app.route('/api/students').get(studentsController.fetchAll);

    app.route('/api/students/:id').get(studentsController.fetchOne);

    app.route('/api/students').post(studentsController.create);

    app.route('/api/students/:id').put(studentsController.update);

    app.route('/api/students/:id').delete(studentsController.delete);
}
