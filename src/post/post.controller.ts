import { Controller, Body, Post, Get } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.sevice";
import { PostEntity } from "./post.entity";

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Get()
  getAllPosts() {
    return this.postService.findAllPosts();
  }
}