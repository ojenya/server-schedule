const User = require('../models/user');
// const { NotFoundError, InternalServerError, UnauthorizedError } = require('../errors');




const login = (req, res, next) => {
    const { email, password } = req.body;
    return User.findUserByCredentials(escape(email), escape(password))
        .then((user) => {
            const token = jwt.sign({ _id: user._id },
                JWT_SECRET, { expiresIn: '7d' },
            );
            res
                .cookie('jwt', token, {
                    maxAge: 3600000 * 24 * 7,
                    httpOnly: true,
                    sameSite: true,
                })
                .end();
        })
        .catch(() => next(new UnauthorizedError()));
};

const getUserById = (req, res, next) => {
    const id = req.user._id;
    User.findById(id)
        .then((user) => {
            if (!user) {
                throw new NotFoundError('Нет пользователя с таким id');
            }
            const { name, email } = user;
            return res.send({ data: name, email });
        })
        .catch(next);
};

const createUser = (req, res, next) => {
    const name = escape(req.body.name);
    const email = escape(req.body.email);
    const password = escape(req.body.password);
    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            name,
            email,
            password: hash,
        }).then((user) => {
            if (!user) {
                throw new InternalServerError('Внутренняя ошибка сервера');
            }
            return res.send({ data: email, name });
        }).catch(next);
    });
};





module.exports = {
    createUser,
    login,
    getUserById,
};