import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsController } from "./post.controller";
import { PostService } from "./post.sevice";
import { PostEntity } from "./post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostsController],
  providers: [PostService]
})

export class PostModule {}