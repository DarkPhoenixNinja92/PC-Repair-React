import { REVIEWS } from "../REVIEWS";

const ReviewCard = () => {
    return (
        <div className='review'>
            <p className="stars">
            {REVIEWS[0].stars} Stars
            </p>
            <p className="comment">
            {REVIEWS[0].comment}
            </p>
            <p className="author">
            {REVIEWS[0].author}
            </p>
        </div>
    )
}

export default ReviewCard;