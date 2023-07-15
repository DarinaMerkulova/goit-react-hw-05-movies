import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from 'services/fetch';



const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState([]);
  const [error, setError] = useState(null);
  const { filmId } = useParams();
;

useEffect(() => {
  if (!filmId) return;

  const fetchReviewsData = async () => {
    try {
      const filmReviewsData = await fetchFilmReviews(filmId);
      console.log(filmReviewsData);
      setFilmReviews(filmReviewsData.results);
    } catch (error) {
      setError(error);
    } finally {
    }
  };
  fetchReviewsData();
}, [filmId]);

return (
  <div>
    {error !== null && (
      <p className="c-error">
        Oops, some error occured. Please, try again later. Error: {error}
      </p>)}
      {filmReviews !== null &&
      <ul>
            {filmReviews &&
              filmReviews.map(({id, author, content}) => <li key={id}><h5>{author}</h5> <p>Character: {content}</p></li>)}
          </ul>}
  
  </div>
)
}

export default Reviews
