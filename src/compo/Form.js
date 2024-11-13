import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Form = ({ addMovie }) => {

  const [title, setTitle] = useState();
  const [vote_avg, setVote_avg] = useState();
  const [overview, setOverview] = useState();
  const [poster_path, setPoster_path] = useState();

const navigate = useNavigate()
const Add=()=>{

  addMovie({
id:uuidv4(),
title: title,
poster_path: poster_path, 
overview: overview,
vote_avg:vote_avg

  })
  navigate('/movie')
}

  return (
    <div className="form">
      <div id="signup">
        <h1>Add Movie</h1>

        <form      >
          <div className="top-row">
            <div className="field-wrap">
              <label>
              {title} <span className="req">*</span>
              </label>
              <input
                type="text"
               
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label>
                Post Image<span className="req">*</span>
              </label>
              <input
                type="text"
                value={poster_path}
                onChange={(e) => setPoster_path(e.target.value)}
              />
            </div>
          </div>

          <div className="field-wrap">
            <label>
              Overview <span className="req">*</span>
            </label>
            <input
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </div>

          <div className="field-wrap">
            <label>
              Vote<span className="req">*</span>
            </label>
            <input
              type="text"
              value={vote_avg}
              onChange={(e) => setVote_avg(e.target.value)}
            />
          </div>

          <button
            type="button"
         onClick={()=>Add()}
          >
            Add movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

