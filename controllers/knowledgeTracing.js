const models = require('../models')

exports.getALL = (req, res) => {
    models.knowledgeTracing.findAll()
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            console.log(err)
        })
}
exports.create = (req, res) => {
    const data = req.body
    data.id = "2"
    models.knowledgeTracing.create(data)
        .then(resp => {

            res.send(resp)
        })
        .catch(err => {
            res.status(500).send({
                success: "false",
                message: err
            })
        })
}
exports.update = (req, res) => {
    const { id } = req.params
    const data = req.body
    models.knowledgeTracing.update(
        data,
        {
            where: {
                id: id
            }
        }
    )
        .then(resp => {

            res.send(resp)
        })
        .catch(err => {
            res.status(500).send({
                success: "false",
                message: err
            })
        })
}
exports.getById = (req, res) => {
    const { id } = req.params
    models.knowledgeTracing.findByPk(id)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send({
                success: "false",
                message: err
            })
        })
}

exports.getBySkillName = (req, res) => {
    const { skillname } = req.params
    models.knowledgeTracing.findOne({
        where: {
            skill_name: skillname
        }
    })
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send({
                success: "false",
                message: err
            })
        })
}