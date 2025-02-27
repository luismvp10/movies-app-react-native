import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if(nowPlayingQuery.isLoading){
      return (
        <View className='justify-center items-center flex-1'>
          <ActivityIndicator color='purple' size={40}/>
        </View>
      )
    }   

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

      {/* Images Carousel */}
      <MainSlideshow movies={nowPlayingQuery.data ?? []}/>

      {/* Popular */}
      <MovieHorizontalList className='mb-5' movies={popularQuery.data ?? []} title='Populares'/>


      {/* Top Rated */}
      <MovieHorizontalList className='mb-5' movies={topRatedQuery.data ?? []} title='Mejor Calificadas'/>

      {/* Upcoming */}
      <MovieHorizontalList className='mb-5' movies={upcomingQuery.data ?? []} title='Próximamente'/>


      {/* Upcoming */}
      <MovieHorizontalList className='mb-5' movies={upcomingQuery.data ?? []} title='Próximamente'/>

      </View>
    </ScrollView>
  )
}

export default HomeScreen;