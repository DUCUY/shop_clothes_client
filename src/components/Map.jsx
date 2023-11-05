import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  // const position = [10.0469, 105.7722]; // Vị trí tại Cần Thơ

  return (
    // <MapContainer center={position} zoom={13} style={{ height: '1000px', width: '300px' }}>
    //   {/* <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   /> */}
    //   
    //   <Marker position={position}>
    //     <Popup>
    //       Địa điểm tại Cần Thơ.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    <div style={{ display: "flex"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.9988656718797!2d105.75932374260556!3d10.01695138380773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089a1fe7b351b%3A0x493fdc0cdb8cecfc!2sJollibee%20Ba%20Th%C3%A1ng%20Hai!5e0!3m2!1svi!2s!4v1696923880931!5m2!1svi!2s" 
      width="600" height="450" style={{border:"0"}} 
      allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title='map'
      ></iframe>
    </div>

  );
};

export default Map;
