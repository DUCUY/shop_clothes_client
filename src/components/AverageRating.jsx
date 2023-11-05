
const AverageRating = ({ avgRate }) => {
  
  return (
    <div>
      <div>
        {avgRate ? `${Number(avgRate).toFixed(1)} ★ ` : 'Chưa có đánh giá'}
      </div>
    </div>
  );
};

export default AverageRating;
