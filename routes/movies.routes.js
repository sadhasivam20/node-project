import express from "express";
import { getMoviesById, getMovies, postMovies, deleteMovies, putMoviesById } from "../services/movies.service.js";
import {auth} from "../middleware/auth.js";
const router=express.Router();

router.get("/", async function (request, response) {
    console.log(request.query);
    if(request.query.rating)
  {
    request.query.rating=+request.query.rating;
  }
  
    const movies= await getMovies(request);
  
      response.send(movies);
    });
  
    //It can take the  particular id value of movie:
    router.get("/:id",  async function (request, response) {
      const{id}=request.params;
      // console.log(request.params,id);
      // const movie = movies.find((mv) => mv.id === id)// two lines of code can be wrrite for node 
  
      //mongo db for data access=>db.collections.findOne({id:'100'})
      const movie= await getMoviesById (id)

      // console.log(movie);
  
      movie? response.send(movie) : response.status(404).send({message : "movie not found"});
    });
  
  
    router.post("/", async function (request, response) {
      const data= request.body;
      console.log(data);
      const result = await postMovies(data);
      response.send(result);
    });
  
    router.delete("/:id", async function (request, response) {
      const{id}=request.params;
      // console.log(request.params,id);
      // const movie = movies.find((mv) => mv.id === id)// two lines of code can be wrrite for node 
  
      //mongo db for data access=>db.collections.findOne({id:'100'})
       
      const movie= await deleteMovies(id)
      // console.log(movie);
  
      movie.deletedCount >0 ? response.send({message:"movie deleted sucessfully"}) : response.status(404).send({message : "movie not found"});
    });
  
    router.put("/:id", async function (request, response) {
      const data=request.body;
      const{id}=request.params;  
      const movie= await putMoviesById(id, data);
      console.log(movie);
      response.send(movie);
    });

    export default router;


