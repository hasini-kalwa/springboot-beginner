package com.hasinik.springbootbeg.services;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hasinik.springbootbeg.models.User;
@Service
public class UserService {
    private List<User> allUsers;
    public UserService(){
        allUsers=new ArrayList<>();
        allUsers.add(new User(1,"John Doe","Male","/images/john.png"));
        allUsers.add(new User(2,"Jane Doe","Female","/images/jane.png"));
        allUsers.add(new User(3,"Bob Smith","Male","/images/bob.png"));
        allUsers.add(new User(4,"Alice Johnson","Female","/images/alice.png"));
    }

    public List<User> getAllUsers(){
        return allUsers;
    }

    public User getUserById(int id){
        for(User user:allUsers){
            if(user.getId()==id){
                return user;
            }
        }
        return null;
    }

    public User addNewUser(User user){
        user.setId(allUsers.size()+1);
        allUsers.add(user);
        return user;
    }

    public void deleteUser(User user){
        allUsers.remove(user);
    }
}