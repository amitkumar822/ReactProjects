

function MovieCard(props){

        const {movies,addStars,decStars,toggleFav,toogleCart} = props;
        //👉💕Rename Props
        const {movies: data} = props;
        const {title,plot,price,rating,stars,fav,isInCart,poster} = data;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="poster" src={poster}/>
                        {/* <img alt="poster" src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_480x.progressive.jpg?v=1573652543"/> */}
                    </div>


                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">₹ {price}</div>


                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img onClick={()=>{decStars(movies)}} className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>

                                <img  className="stars" alt="star"src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                                <img onClick={()=>{addStars(movies)}} className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"/>
                                
                                <span className="starCount">{` ${stars}`}</span>
                            </div>


                            {/* {fav?<div className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</div>
                            :<div className="favourite-btn" onClick={this.handleFav}>Favourite</div>} */}
                            
                            <div className={fav?"unfavourite-btn":"favourite-btn"} 
                            onClick={()=>{toggleFav(movies)}}>{fav?"Un-favourite":"Favourite"}</div>

                            
                            <div className={isInCart?"remove-cart-btn":"cart-btn"}
                            onClick={()=>{toogleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default MovieCard;