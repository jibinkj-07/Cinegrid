
import { useParams } from "react-router-dom";
function MovieDetail() {

    // Fetching param from url
    const { id } = useParams();
    return (
        <div className="flex justify-center items-center">
            MovieDetail : {id}
        </div>
    )
}

export default MovieDetail