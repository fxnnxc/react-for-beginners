import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const { id }  = useParams();
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setDetail(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);
    console.log(detail);
    var runtime_h = parseInt(detail.runtime/60); 
    var runtime_m = parseInt(detail.runtime)%60;
    if (runtime_m.toString().length == 1){
        runtime_m = "0"+runtime_m.toString()
    }
    return (
        <div>
            <h1> {detail.title} </h1>
            <li> Rating : {detail.rating} </li>
            <li> # Like : {detail.like_count} </li>
            <li> Runtime : {runtime_h} : {runtime_m} </li>
            <li> Rating : {detail.rating} </li>

            <img src= {detail.background_image} ></img>
            <p> {detail.description_full}</p>
        </div>
    )
}

export default Detail;