const middleware = require('../middleware/auth');

const students = [
    {
        id: '1',
        name: 'Jan Peeters',
    },
    {
        id: '2',
        name: 'Marie Jansens',
    }
];

module.exports = (app) => {
    app.route('/api/students').get((req, res) => {
        res.status(200).json(students);
    });

    app.route('/api/students/:id').get((req, res) => {
        const student = students.find((stu) => {
            return stu.id === req.params.id;
        });

        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({
                error: 404,
                message: 'Not Found'
            });
        }

        
    });

    app.route('/api/students').post(middleware, (req, res) => {
        res.status(201).json(Object.assign({}, req.body, {
            id: (students.length + 1).toString(),
        }));
    });

    app.route('/api/students/:id').put((req, res) => {
        res.status(200).json(req.body);
    });

    app.route('/api/students/:id').delete((req, res) => {
        res.status(204).send();
    });
}
