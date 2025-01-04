var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var cors = require('cors'); // Add CORS
var User = require('./models/user'); // Correct path to the model
const { CLIENT_RENEG_LIMIT } = require('tls');
var app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// MongoDB connection
mdb.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("MongoDB Connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err);
    });

// Middleware to parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome da maple");
});

// Corrected the '/signup' route
app.post('/signup', (req, res) => {
    console.log(req.body);  // Log the incoming request body
    var { firstName, lastName, email, password } = req.body; // Destructure values from the body
    console.log(firstName, lastName, email, password); // Log the extracted values

    try {
        // Create a new user from the UserActivation model
        var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        console.log(password); 
       
        // Save the user to the database
        newUser.save()
            .then(() => {
                console.log("User Added Successfully");
                res.status(200).send("User added successfully");
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send("Error saving user");
            });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error processing the request");
    }
});

// JSON route
app.get('/json', (req, res) => {  
    res.json({ server: "Welcome da MACHI", url: "localhost", port: PORT });
});

// Static file route
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

// Fetch all signup records
app.get('/getsignup', async (req, res) => {
    try {
        var allSignupRecords = await User.find();
        res.json(allSignupRecords);
        console.log("All records are fetched");
    } catch (err) { 
        console.log(err);
        res.status(500).send("Error fetching records");
    }
});


// Corrected the 'login' route
app.post('/login', async (req, res) => {
    var { email, password } = req.body;
    console.log(email,password);
    try {
        var existingUser = await User.findOne({ email: email });
        if (existingUser) {
            console.log("User found:", existingUser);
            if (existingUser.password === password) {
                console.log("Login Successful");
                res.json({ message: "Login Successful", isLoggedIn: true });
            } else {
                console.log("Incorrect password");
                res.status(401).json({ message: "Invalid email or password", isLoggedIn: false });
            }
        } else {
            console.log("User not found");
            res.status(401).json({ message: "Invalid email or password", isLoggedIn: false });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Error processing the request");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server started\nUrl: http://localhost:${PORT}`);
});