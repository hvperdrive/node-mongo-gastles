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

    app.route('/api/students').get((req, res) => {
        res.status(200).json({
            id: 1,
            name: 'Jan Peeters',
        });
    });
}
