var Livro = require('../models/livros')

module.exports.getLivros = () => {
    return Livro
        .find()
        .exec()
}

module.exports.getLivrosById = id => {
    return Livro
        .findOne({_id : id})
        .exec()
}

module.exports.getLivrosByCharacter = character => {
    return Livro
        .find({characters : {$in : [character]}})
        .exec()
}

module.exports.getLivrosByGenre = genre => {
    return Livro
        .find({genres : {$in : [genre]}})
        .exec()
}

module.exports.getLivrosByAuthor = auth => {
    return Livro
        .find({author : auth})
        .exec()
}

module.exports.getGenres = () => {
    return Livro
        .distinct('genres')
        .sort()
        .exec()
}

module.exports.getCharacters = () => {
    return Livro
        .distinct('characters')
        .sort()
        .exec()
}

module.exports.insert = livr => {
    var livrToSave = new Livro(livr)
    return livrToSave.save()
}

module.exports.update = (livr, id) => {
    return Livro
        .findByIdAndUpdate(id, livr, {new : true})
        .exec()
}

module.exports.delete = id => {
    return Livro
        .findByIdAndDelete(id, {new : true})
        .exec()
}