require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {

 try {
    const results = await db.query("select * from restaurants"); 
    console.log("route hundler");
  res.status(200).json({
      status:"success",
      results: results.rows.length,
      data: {
        restaurant: results.rows,
      },
  });
 } catch (error) {
     console.log(error)
 }   
  
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
 res.status(200).json({
    status: "success",
    data: {
        restaurant: "mcdonalds"
    },
 });

});
// Create a Restaurant

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        },
  });
});

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds"
        },
  });
});

//Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req,res) => {
    res.status(204).json({
     status: "success"
    });
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});