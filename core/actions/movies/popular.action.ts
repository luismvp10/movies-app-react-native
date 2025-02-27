import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const popularMoviesAction = async() => {

    try{
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
       // console.log(JSON.stringify(data, null, 2));

       const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

       return movies;

    } catch(error){
        console.log(error);
        throw 'Cannot load now playing movies';
    }

}