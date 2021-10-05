import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUser = (req, res) => {    
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id);

    res.send('User deleted succesfully');
}

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const userToUpdate = users.find(user => user.id === id);

    if (firstName) userToUpdate.firstName = firstName;
    if (lastName) userToUpdate.lastName = lastName;
    if (age) userToUpdate.age = age;

    res.send('User has been updated');
}