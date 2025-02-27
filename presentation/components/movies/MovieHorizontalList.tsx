
import { Movie } from '@/infraestructure/interfaces/movie.interface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Array<Movie>;
    className?: string;
}

const MovieHorizontalList = ({title, movies, className}: Props) => {
  return (
    <View className={`${className}`}>
        {title &&  <Text className='text-2xl font-bold px-4 mb-2'>{title}</Text>}
     
      
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster={true}/>}
      />
    </View>
  )
}

export default MovieHorizontalList;