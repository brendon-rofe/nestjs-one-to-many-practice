import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>
  ) {}

  createPost(dto: CreatePostDto) {
    return this.postRepository.save(dto);
  }

  findAllPosts(): Promise<PostEntity[]> {
    return this.postRepository.find({ relations: ["author"] });
  }

}