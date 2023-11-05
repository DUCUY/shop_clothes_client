import React, { useState } from 'react';
import { userRequest, userReques } from '../requestMethods';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';


const Rating = ({ productId, refresh, handleRefresh }) => {
  const [rating, setRating] = useState(0);
  const next = useHistory
  const userId = useSelector(state => state.user.currentUser)?._id;

  const handleRating = async (rate) => {
    try {
      // if (userId) {
        const res = await userRequest.post('products/ratings', {
          productId: productId,
          userId: userId,
          rate: rate
        }
        )
        handleRefresh(!refresh);
      // } else {
      //   next.push('/login');}
        
      //  console.log(response.data); // In ra message từ server (ví dụ: Đánh giá sản phẩm thành công.)
      // Cập nhật UI nếu cần thiết
    } catch (error) {
      console.error(error);
      // Xử lý lỗi nếu cần thiết
    }
  };

  return (
    <div style={{}}>
      <h3>Đánh Giá Sản Phẩm</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            <StarIcon
              className={star <= rating ? 'star-filled' : 'star-empty'}
              onClick={() => handleRating(star)}
              style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
            />
          </span>

        ))}
      </div>
    </div>
  );
};

export default Rating;
