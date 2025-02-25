package com.wecodeZA.backend.User;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

<<<<<<< HEAD
@CrossOrigin
=======
@CrossOrigin(origins = "http://localhost:5173")
>>>>>>> 375b2abed6b7d71693b2f642fdd07097ec6310b7
@RestController
@RequestMapping(path = "api/wecode/users")
public class UserController {

    public UserController(UserService useService) {
        this.useService = useService;
    }

    private final UserService useService;

    //Route to get a list of all users from database
    @GetMapping()
    public List<User> getUsers(){
        return useService.getUsers();
    }

    //Route to get user from database
    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable("id")Long id){
        return useService.getUserById(id);
    }

    //Route to sign up new user and save to database
    @PostMapping("signup")
    public ResponseEntity<String> signupUser(@RequestBody User user){
        useService.addNewUser(user);
        return ResponseEntity.ok("Sign up successful");
    }

    //Route to sign in user, validates the user credentials
    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody User user){
        boolean isValid = useService.validateLogin(user.getUsername(), user.getPassword());

        if(isValid){
            return ResponseEntity.ok("Login successful");
        }
        else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    //Route to delete user from database
    @DeleteMapping(path = "{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id){
        useService.deleteUser(id);
        return ResponseEntity.ok("User successfully deleted");
    }

    //Route to update user details and save to database
    @PutMapping(path = "{id}")
    public ResponseEntity<String> updateUser(
            @PathVariable("id") Long id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String lastname,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profession,
            @RequestParam(required = false) String bio){
        useService.updateUser(id, name, lastname, email, username, profession, bio);
        return ResponseEntity.ok("User details successfully updated");
    }




}
