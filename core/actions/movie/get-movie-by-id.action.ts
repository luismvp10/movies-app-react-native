import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const getMovieByIdAction = async(id: string | number): Promise<CompleteMovie> => {

        try{
            const { data } = await movieApi.get<MovieDBMovieResponse>(`${id}`);
    
           const movie = MovieMapper.fromTheMovieDBToCompleteMovie(data);

           return movie;
    
        } catch(error){
            console.log(error);
            throw 'Cannot load now movie detail';
        }

}