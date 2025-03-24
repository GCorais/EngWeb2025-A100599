var Aluno = require('../models/aluno')

module.exports.list = () => {
    return Aluno
        .find()
        .sort({nome : 1})
        .exec()
}

module.exports.findById = id => {
    return Aluno
        .findOne({_id : id})
        .exec()
}

module.exports.insert = async aluno => {
    const existing = await Aluno.find({_id: aluno.id}).exec()
    if (existing.length != 1) {
        const newAluno = new Aluno(aluno)
        newAluno._id = aluno.id
        return newAluno.save()
    } else {
        throw new Error("Aluno já existe.")
    }
}


module.exports.update = (id, aluno) => {
    return Aluno
        .findByIdAndUpdate(id, aluno)
        .exec()
}

module.exports.delete = id => {
    return Aluno
        .findByIdAndDelete(id)
        .exec()
}

module.exports.inverteTpc = async(id, idTpc) => {
    var aluno = await Aluno
        .findOne({'_id' : id})
        .exec()
    var tpc = `tpc${idTpc}`
    if(aluno[tpc]){
        aluno[tpc] = !aluno[tpc]
    } else{
        aluno[tpc] = true
    }

    return Aluno
        .findByIdAndUpdate(id, aluno)
        .exec()
}