import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../components/style.css"
function Cards() {
  // const url = "https://imdb-api.com/API/AdvancedSearch/k_s7l8kj1r/?genres=action,adventure";
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=ee3db26c13a95de355febc98d8b68dbf";
  const [images, setimages] = useState([]);
  const axios = require("axios");
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    makeRequest()
  }, [])

  const makeRequest = () => {
    axios.get(url).then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        setimages(res.data.results)
      }
      else {
        console.log("An error occur");
      }
    }).catch((err) => {
      seterror(err);
    })
    // setisLoading(false)
  }
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row p-2">
          {images.map((user, index) => (
            <div className="card bg-dark shadow p-2">
              {/* <img src={user.image} className="card-img-top" alt="..."/> */}
              <img src={`https://image.tmdb.org/t/p/w185` + user.backdrop_path} className="card-img-top" alt="..." />

              <div className="card-body">
                <p className="text-white">{user.original_title}</p>
               <div>
               <i class="fa-solid fa-circle-play text-white"></i>
                <i class="fa-solid fa-circle-plus text-white mx-2"></i>
                <i class="fa-solid fa-thumbs-up text-white"></i>
                {/* <i class="fa-solid fa-circle-chevron-down text-white mx-auto"></i> */}
               </div>

                {/* <div>
                    <p className="text-white">{user.title}</p>
                    <p className="text-white mb-3">{user.genres}</p>
               </div> */}

              </div>
            </div>


          ))}
        </div>
      </div>
    </>
  )
}

export default Cards