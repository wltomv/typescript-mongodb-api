import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user'
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ email, password, name, description }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREAD_USER";

    const passHash = await encrypt(password)
    const registerNew = await UserModel.create({ email, password: passHash, name, description });

    return registerNew;

}

const login = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT FOUND USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "INCORRECT PASSWORD";

    const token = await generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }

    return data;

}

export { registerNewUser, login }