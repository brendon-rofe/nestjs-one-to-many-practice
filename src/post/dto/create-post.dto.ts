import { User } from "src/user/user.entity";

export class CreatePostDto {
  title: string;
  author: User;
}