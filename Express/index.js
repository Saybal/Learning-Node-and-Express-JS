import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

// app.get
// app.post
// app.patch
// app.put
// app.delete

app.get('/', (req, res) => {

    res.send("Hello, I am from Home Page");
    
});

app.get('/user', (req, res) => {
    const user = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
        address: "123 Main St, Anytown, USA"
    };
    // res.json(user);
    res.status(200).json(user);
    // res.send(JSON.stringify(user));
    // Each sends the same result.
})

app.get('/user/:id/house/:house', (req, res) => {
    const userId = req.params.id;
    const houseId = req.params.house;
    const { id, house  } = req.params; // destructuring method to get the userId from the params.
    

    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith", address: { house_no: 4568, state: "Sylhet" } },
        { id: 3, name: "Alice Johnson" }
    ];

    // const user = users.find(u => u.id === parseInt(userId));
    const user = users.find(u => (u.id === parseInt(id) && u.address?.house_no === parseInt(house)));

    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({message: "User not found"});
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})