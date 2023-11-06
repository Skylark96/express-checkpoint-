const express= require("require")
const app=express() 

app.use((req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); 
    const hourOfDay = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next(); 
    } else {
    res.send('This website is only available during working hours (Monday to Friday, from 9 to 17).');
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1><a href="/services">Our Services</a><br><a href="/contact">Contact Us</a>');
});

app.get('/services', (req, res) => {
    res.send('<h1>Our Services</h1><a href="/">Home</a><br><a href="/contact">Contact Us</a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><a href="/">Home</a><br><a href="/services">Our Services</a>');
});

app.listen(8000, ()=>{
    console.log("server is running on the port 8000")
})