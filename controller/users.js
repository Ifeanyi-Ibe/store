

const UsersController = {};

UsersController.find = async function(req, res, next) {
    res.send({"message": "Here... all the users we've got!"});
}

UsersController.findUser = async function(req, res, next) {
    res.send({"message": "Here... the user you're looking for!"});
}

UsersController.update = async function(req, res, next) {
    res.send({"message": "User details updated successfully!"});
}

UsersController.create = async function(req, res, next) {
    res.send({"message": "A new user has been added!"});
}

UsersController.delete = async function(req, res, next) {
    res.send({"message": "Sorry pal, you've got to go!"});
}

module.exports = UsersController;