import code from './code';
import mobile from './mobile';
import password from './password';
import user from './user';

const constraints = { ...code, ...mobile, ...password, ...user };

export default constraints;