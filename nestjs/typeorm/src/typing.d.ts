import { UserDTO } from 'src/users/dtos/user.dto';

declare global {
  namespace Express {
    type User = UserDTO;

    interface Request {
      token?: string;
      user?: any;
    }
  }
}
