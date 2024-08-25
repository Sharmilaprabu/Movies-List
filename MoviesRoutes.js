const express = require("express");
const router = express.Router();
const Movie = require("../../db/schemas/movieSchema");

router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const movie = await Movie.findById(id);
      if (!movie) {
        res.status(404).json({ message: "Movie not found" });
      } else {
        res.json(movie);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  
    
    };
    
    if (queryParams.rating) (
    
    filters.rating = {router.get("/", async (req, res) {


router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            res.status(404).json({
                message: "Movie not found",
            });
        } else {
            res.json(movie);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const movieData = req.body;
        const newMovie = new Movie(movieData);
        await newMovie.save();
        res.json({
            message: "Movie added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const updatedMovieData = req.body;
        const movie = await Movie.findByIdAndUpdate(movieId, updatedMovieData, { new: true });
        if (!movie) {
            res.status(404).json({
                message: "Movie not found",
            });
        } else {
            res.json({
                message: "Movie updated successfully",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

module.exports = router;