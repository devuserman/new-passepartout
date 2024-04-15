import React, { useState, useEffect } from 'react';
import './CommentSlideshow-min.css';
import reviews from '../comments.json';

const CommentSlideshow = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const displayNextReviews = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 2) % reviews.length);
    };

    useEffect(() => {
        const intervalId = setInterval(displayNextReviews, 7000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="reviews-container">
            {reviews.slice(currentReviewIndex, currentReviewIndex + 2).map((review, index) => (
                <div key={`${currentReviewIndex}-${index}`} className="review slide-in">
                    <div className="author">{review.author}</div>
                    <div className="stars">{'★'.repeat(review.rating)}</div>
                    <div className="date">{review.date}</div>
                    <div className="comment">{review.comment}</div>
                </div>
            ))}
        </div>
    );
};

export default CommentSlideshow;
