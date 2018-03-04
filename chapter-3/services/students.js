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

module.exports.fetchAll = () => {
    return students;
}

module.exports.fetchById = (id) => {
    return students.find((student) => {
        return student.id === id;
    });
}
