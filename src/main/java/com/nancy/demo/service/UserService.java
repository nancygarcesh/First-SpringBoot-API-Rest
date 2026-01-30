package com.nancy.demo.service;

import com.nancy.demo.exception.DuplicateResourceException;
import com.nancy.demo.exception.ResourceNotFoundException;
import com.nancy.demo.model.User;
import com.nancy.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User create(User user) {
        repository.findByEmail(user.getEmail())
                .ifPresent(u -> {
                    throw new DuplicateResourceException("El email ya existe");
                });

        return repository.save(user);
    }

    public List<User> getAll() {
        return repository.findAll();
    }

    public User getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
    }

    public User update(Long id, User user) {
        User existing = getById(id);

        existing.setName(user.getName());
        existing.setEmail(user.getEmail());

        return repository.save(existing);
    }

    public void delete(Long id) {
        User user = getById(id);
        repository.delete(user);
    }
}