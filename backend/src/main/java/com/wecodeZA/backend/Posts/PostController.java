package com.wecodeZA.backend.Posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode/posts")
public class PostController {

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    private final PostService postService;

    //Route to retrieve all post from database
    @GetMapping()
    public List<Post> getAllPosts(){
        return  postService.getAllPost();
    }

    //Route to retrieve post by id from database
    @GetMapping("{id}")
    public Post getPostById(@PathVariable Long id){
        return postService.getPostbyId(id);
    }

    //Route to retrieve post by user id from database
    @GetMapping("user/{userId}")
    public List<Post> getPostByUserId(@PathVariable Long userId){
        return postService.getPostsByUserId(userId);
    }

    //Route to create new post and save it to database
    @PostMapping("creatpost")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        postService.createPost(post.getId(), post.getTitle(), post.getTopic(), post.getContext());
        return ResponseEntity.ok("Post successfully posted");
    }

    //Route to delete post by user id
    @DeleteMapping(path = "{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id){
        postService.deletePost(id);
        return ResponseEntity.ok("Post successfully deleted");
    }



}
