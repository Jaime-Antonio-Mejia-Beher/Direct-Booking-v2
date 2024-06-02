import React from 'react'

const AirbnbEmbed = () => {
  return (
    <div
      className="airbnb-embed-frame"
      data-id="50157279"
      data-view="home"
      data-hide-price="true"
      style="width: 450px; height: 300px; margin: auto;"
    >
      <a href="https://www.airbnb.com/rooms/50157279?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
        View On Airbnb
      </a>
      <a
        href="https://www.airbnb.com/rooms/50157279?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
        rel="nofollow"
      >
        Home in Commerce City · ★4.79 · 1 bedroom · 1 bed · 1 bath
      </a>
      <script
        async=""
        src="https://www.airbnb.com/embeddable/airbnb_jssdk"
      ></script>
    </div>
  );
}

export default AirbnbEmbed