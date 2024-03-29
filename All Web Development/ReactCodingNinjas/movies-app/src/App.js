import React from "react"
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./MoviesData";


class App extends React.Component{
    

  
  constructor(){
    super();
    this.state = {

        movies: movies,
        cartCount: 0
    }
}


/*=====================================================
    🫸Stars Increaseing and Decresing Button🫷
========================================================*/

handleIncStar = (movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);

      if(movies[mid].stars>=5)return;

      movies[mid].stars +=0.5;
      
      this.setState({
          // movies: movies
          movies
      })
  }

  handleDecStar =(movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      
      if(movies[mid].stars<=0) return;

      movies[mid].stars -=0.5;

      this.setState({
          movies
      })
  }


  handalToggleFav =(movie)=>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);

      movies[mid].fav = !movies[mid].fav
      this.setState({
          movies
      })
  }

  handleToogleCart = (movie)=>{
      let {movies,cartCount} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].isInCart = !movies[mid].isInCart

      console.log(movies[mid].isInCart);

      if(movies[mid].isInCart){
        cartCount +=1;
      }else{
        cartCount -=1;
      }
      this.setState({
          movies,
          cartCount
      })

      console.log(cartCount);
  }



    render(){
        const {movies,cartCount} = this.state;
      return (
        <>
          <Navbar cartCount = {cartCount}/>
          <MovieList movies = {movies}
          addStars = {this.handleIncStar}
          decStars = {this.handleDecStar}
          toggleFav = {this.handalToggleFav}
          toogleCart = {this.handleToogleCart}
          />
        </>
      );

    }
}


export default App;
