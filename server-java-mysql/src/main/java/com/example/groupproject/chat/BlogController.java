package com.example.groupproject.chat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class BlogController {

	@Autowired
   	BlogRepository dao;

    @GetMapping("/blog")
    public List<Blog> getBlog() {
            List<Blog> foundBlog = dao.findAll();
        return foundBlog;
    }

    @GetMapping("/blog/{id}")
    public ResponseEntity<Blog> getBlog(@PathVariable(value="id") Integer id) {
        Blog foundBlog = dao.findById(id).orElse(null);

        if(foundBlog == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }
        return ResponseEntity.ok(foundBlog);
    }

    @PostMapping("/blog")
    public ResponseEntity<Blog> postBlog(@RequestBody Blog blog) {

        // saving to DB using instance of the repo interface
        Blog createdBlog = dao.save(blog);

        // RespEntity crafts response to include correct status codes.
        return ResponseEntity.ok(createdBlog);
    }

    @DeleteMapping("/blog{id}")
    public ResponseEntity<Blog> deleteBlog(@PathVariable(value="id") Integer id) {
        Blog foundBlog = dao.findById(id).orElse(null);

        if(foundBlog == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }else {
            dao.delete(foundBlog);
        }
        return ResponseEntity.ok().build();
    }

	
}
