import Button from "./Button"


const Card = ({movie}) => {

  return (
        <div className="card movie-card">

        {/* RANK BADGE */}
        <div className="rank-badge">
            {movie["#RANK"]}
        </div>

        <div className="poster">
            <img src={movie["#IMG_POSTER"]} alt="" />
        </div>

        <div className="text">
            <h2>
                {movie["#TITLE"]}
            <span>({movie["#YEAR"]})</span>
            </h2>

            <p className="actors">
                {movie["#ACTORS"]}
            </p>
        </div>

        <Button movie={movie}/>
        
        </div>
  )
}

export default Card
