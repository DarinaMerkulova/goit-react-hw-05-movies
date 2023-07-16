import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from 'services/fetch';
import { Loader } from '../Loader/Loader';
import {
  StyledReviewsItem,
  StyledReviewsList,
  StyledReviewsTitle,
} from './Reviews.styled';

const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState([]);
  const [error, setError] = useState(null);
  const { filmId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!filmId) return;

    const fetchReviewsData = async () => {
      try {
        setIsLoading(true);
        const filmReviewsData = await fetchFilmReviews(filmId);
        console.log(filmReviewsData);
        setFilmReviews(filmReviewsData.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsData();
  }, [filmId]);

  return (
    <div>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      <StyledReviewsList>
        {filmReviews && filmReviews.length > 0 ? (
          filmReviews.map(({ id, author, content }) => (
            <StyledReviewsItem key={id}>
              <StyledReviewsTitle>{author}</StyledReviewsTitle>
              <p>Character: {content}</p>
            </StyledReviewsItem>
          ))
        ) : (
          <h2>No reviews</h2>
        )}
      </StyledReviewsList>
    </div>
  );
};

export default Reviews;
