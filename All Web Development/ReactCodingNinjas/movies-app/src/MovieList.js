import MovieCard from "./MovieCard";


function MovieList(props){
    
    const {movies, addStars, decStars, toggleFav, toogleCart} = props;
    return (        
        <>
            {
            movies.map((movie,index)=> 
            <MovieCard key={index} 
            movies={movie} 
            addStars = {addStars}
            decStars = {decStars}
            toogleCart = {toogleCart}
            toggleFav = {toggleFav} />
            )}
        </>
    )
}

export default MovieList;