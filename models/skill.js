const skills = [
    {id: 123440, skill: 'Front End', pro: false},
    {id: 123450, skill: 'Back End', pro: true},
    {id: 123460, skill: 'Full Stack', pro: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}