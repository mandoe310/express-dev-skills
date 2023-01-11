const skills = [
    {id: 123440, skill: 'Front End', pro: false},
    {id: 123450, skill: 'Back End', pro: true},
    {id: 123460, skill: 'Full Stack', pro: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
function create(skill) {
    skill.id = Date.now() % 1000000
    skill.pro = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}