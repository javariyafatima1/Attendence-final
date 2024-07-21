import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
  return (
    <div>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          className="  mx-5 "
           src="https://i0.wp.com/www.esearchadvisors.com/blog/wp-content/uploads/2018/12/ESA-Blog-Banner.jpg?fit=724%2C306&ssl=1"
           alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          className="mx-5  "
          src="https://www.shutterstock.com/image-photo/website-banner-laptop-female-typing-260nw-1176612745.jpg"
         alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          className=" mx-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVa1Kz2ImgUA7FVLzfUsVHPyak3216ycsCnSPTtM7-a9MDaTW_Hc8Y-Vf5EzyCm0QzGZA&usqp=CAU"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;
