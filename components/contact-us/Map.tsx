import React from "react";

const Map = () => {
  return (
    <div className="w-full aspect-[2.4] bg-accent min-h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3612.792962160281!2d55.181156925379!3d25.108868827767882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20117%2C%20Al%20Attar%20business%20center%2C%20Al%20Barsha%201%2C%20Sheikh%20Zayed%20road%2C%20Dubai%2C%20United%20Arab%20Emirates%20google%20maps!5e0!3m2!1sen!2sng!4v1758136933116!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
