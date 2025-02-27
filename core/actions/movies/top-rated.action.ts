import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const topRatedMoviesAction = async() => {

    try{
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');

       const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

       return movies;

    } catch(error){
        console.log(error);
        throw 'Cannot load now top rated movies';
    }

}