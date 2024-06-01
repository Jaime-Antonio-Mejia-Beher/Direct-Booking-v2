const accommodations = [
  {
    id: "cupertino",
    description: "Private Unit | Kitchen | King Bed",
    img: "/cupertino/Collage.png",
    link: "/cupertino",
    price: "$99",
    city: "Cupertino, CA",
    images: [
      "Bath.jpg",
      "Bath2.jpg",
      "Bedroom Entrance.jpg",
      "Bedroom.jpg",
      "Bedroom3.jpg",
      "BedShot.jpg",
      "Closet.jpg",
      "Collage.png",
      "CuttingBoard.jpg",
      "Dishes.jpg",
      "ElectricWaterKettle.jpg",
      "Entrance.jpg",
      "Front.jpg",
      "GateEntrance.jpg",
      "Glassware.jpg",
      "Kitchen.jpg",
      "Kitchen2.jpg",
      "MixingBowls.jpg",
      "MoreUtensils.jpg",
      "Patio.jpg",
      "PyrexContainres.jpg",
      "Shower.jpg",
      "Stove.jpg",
      "ToasterOven.jpg",
      "TVshot.jpg",
      "Walkway.jpg",
      "Utensils.jpg",
    ].map((image) => `/cupertino/${image}`),
    reviews: [
      {
        name: "Heather",
        date: "February 2024",
        comment:
          "This place is great! It has everything you need - the kitchen especially is super stocked if you need to cook! Jaime was super friendly and checked in each day to see if there was anything that could be done to make our stay better! The place is private and felt very safe. The bed is super comfy!! We had a great stay here.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/e7340ce5-6a8f-4584-a8f9-0e96160497a0.jpg?im_w=240",
        city: "8 years on Airbnb",
      },
      {
        name: "Cherie",
        date: "October 2023",
        comment:
          "The space is just right for two people. Very comfortable and light filled. We often ate breakfast in and the kitchen had everything we needed. We love the glass electric kettle and an in-line filtered water system. No need to buy plastic bottles of water during our stay. We often had our breakfast out on the patio. It is a simple, private outdoor space with roses draping over the high neighboring fences. We could see trees laden with persimmons. I made a request to Jaime to improve my experience. (I am somewhat sensitive to fragrance.) He responded quickly and said he’ll make the change I requested. We look forward to returning to our little home-away-from-home.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/e51f8761-db18-4579-9cf3-37a0d4b017ff.jpg?im_w=240",
        city: "Seattle, Washington",
      },
      {
        name: "Jae Seo",
        date: "August 2023",
        comment:
          "It was a quiet and safe neighborhood. I had a very peaceful stay. Wifi was good so that I could work online during my stay. The small kitchen provided all the features I needed so I cooked several times. Thanks Jamie for the quick and clear communication. I highly recommend this place.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/aefd53c4-b2ab-4d48-b31d-9d495f8559e8.jpg?im_w=240",
        city: "August 2023",
      },
      {
        name: "Neil",
        date: "November 2023",
        comment:
          "We truly loved this place and a lot of privacy. Jaime and Geno responded to our texts/dms quickly, and helped out with out rubbish (trash/recycling). We used the kitchen a lot as we were able to cook our own meals, and also were able to prep for our Thanksgiving potlucks. Sorry if the aroma from our pumpkin and apple pies distracted y’all. The whole space was perfect and clean. I would reserve again if we’re in the SJ/SC area again. Big Mahalo to the hosts and space!",
        avatar:
          "https://a0.muscache.com/im/pictures/user/749f6b05-27c7-4e10-8fe9-a1684bfc41fc.jpg?im_w=240",
        city: "Daly City, California",
      },
    ],
  },
  {
    id: "basement",
    description:
      "Ping-Pong | King Bed | DIA Airport | Laundry | Kitchenette | Private Unit",
    img: "/basement/Collage.jpg",
    link: "/basement",
    price: "$99",
    city: "Denver, CO",
    images: [
      // "Collage.jpg",
      "PingPong.jpg",
      "PingPongWidShot.jpg",
      "BedroomShelf.jpg",
      "BedroomMain.jpg",
      "Laundry.jpg",
      "Pantry.jpg",
      "KitchenSink.jpg",
      "Bathroom.jpg",
      "BathroomSink.jpg",
      "FrontKingBed.jpg",
      "SectionalSofa.jpg",
      "Games.jpg",
      "BoardGames.jpg",
      "LivingRoomTV.jpg",
      "PatioChairs.jpg",
      "DoorLock.jpg",
      "FrontOfHome.jpg",
      "DriveWay.jpg",
      "SideGate.jpg",
      "SideWalkWay.jpg",
      "Backyard.jpg",
      "SlidingDoor.jpg",
      "OpenSpace.jpg",
    ].map((image) => `/basement/${image}`),
    reviews: [
      {
        name: "Rachel",
        date: "November 2023",
        comment:
          "Me and my husband loved our stay! We were both surprised on how big the basement actually was! Our room was HUGE. It felt like home. Very clean, definitely would stay here again. Jaime was very responsive and helpful. Thank you again!!!",
        avatar:
          "https://a0.muscache.com/im/pictures/user/1be09349-3e36-4a01-a68d-d9bc3da27179.jpg?im_w=240",
        city: "Fort Worth, Texas",
      },
      {
        name: "Maria",
        date: "July 2023",
        comment:
          "Everything about this place was amazing. It was better and more spacious than what we expected and in the center of all locations we went to visit. The neighborhood was very nice and quiet and safe. We are planning to go back next year.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/02000614-40f4-43f3-b047-a7a277559b13.jpg?im_w=240",
        city: "Gonzales, California",
      },
      {
        name: "Jessica",
        date: "March 2022",
        comment:
          "This place was absolutely amazing. First, it looked exactly like the pictures. The walkway into the entrance was lit and it made it very nice when coming home later in the day. It was very very cozy. The temperature was always perfect. My son actually asked if we could just live there lol. The TV broke the first night and within a few minutes they were down there getting a new one in and fixing the issue. Any time I needed anything, they were there. I was very tempted to steal their pillows because they are legit Amazing. A comfy bed makes alllll the difference. I was here because I was going through a tough situation and suddenly moving and my house wasn’t ready to move into yet. Staying here made this stressful and hurtful time, comforting and relaxing. It has everything you need —towels, extra bedding, a little heater if you get too cold. Cups, plates, utensils.. the cutest little kitchenette. If I ever need to stay somewhere again, I will 200% be contacting here. If you’re traveling, it’s prefect. It’s right by the airport (not close enough to hear the planes) but still by shops and food. I cannot say enough good things about this place. STAY HERE!! 😊",
        avatar:
          "https://a0.muscache.com/im/pictures/user/64d06601-cf35-4ed0-b4b9-a3a3e4614b86.jpg?im_w=240",
        city: "Littleton, Colorado",
      },
      {
        name: "Shailin",
        date: "February 2022",
        comment:
          "Really clean, new place! The host was very easy to communicate with and he met our every question and need with generosity. The bed was extremely comfortable, nice and firm. The kitchen had a copper chef and air frier which made it possible to cook most everything we would want to. Great location too!",
        avatar:
          "https://a0.muscache.com/im/pictures/user/dcac44ca-b5ac-4105-a5bf-0bc1840df799.jpg?im_w=240",
        city: "Sweden",
      },
    ],
  },
  {
    id: "upstairs",
    description:
      "Low Cleaning Fee | DIA Airport | Patio | Office | Private Unit | 4 Bed 3 Bath",
    img: "/upstairs/LivingRmHighlights.png",
    link: "/upstairs",
    price: "$99",
    city: "Denver, CO",
    images: [
      "Buffet.jpg",
      "DiningRoom.jpg",
      "DiningTable2.jpg",
      "Kitchen2.jpg",
      "LivingRoom.jpg",
      "Fireplace.jpg",
      "GuestBathCloseUp.jpg",
      "MasterTVSide.jpg",
      "MasterBath.jpg",
      "MasterBedroom2.jpg",
      "MasterBedroom.jpg",
      "OfficeFlexSpace.jpg",
      "BedWBath3.jpg",
      "GuestBath2.jpg",
      "Patio.jpg",
      "DownstairsQueen.jpg",
      "OfficeBed.jpg",
      "BedWBath.jpg",
      "FrontHome.jpg",
      "BathBed2.jpg",
      "Paito2.jpg",
      "ChristmasLightsFront.jpg",
      "NightPatio.jpg",
      // "SlidingDoor.jpg",
    ].map((image) => `/upstairs/${image}`),
    reviews: [
      {
        name: "Robin And Mark",
        date: "July 2023",
        comment:
          "The pics on Airbnb do not give justice to how beautiful this home is. Jaime was more than accommodating for any needs even though this home had more than anything you needed. If you have younger children it is set in an amazing neighborhood with a pretty park and play structure right across the street. There aren’t enough words to say how great this place was for our family. 10+ stars for Jaime.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/ca2dce3c-8709-4446-9200-f904c717ad67.jpg?im_w=240",
        city: "Denver, CO",
      },
      {
        name: "Nicolas",
        date: "January 2024",
        comment:
          "Traveled for work and Jamie was an amazing host and it was a really nice and relaxing home to be able to stay in, it was very clean and comfortable.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/2daa0249-f623-4dae-94fa-c98905b3c79c.jpg?im_w=240",
        city: "Lake Charles, Louisiana",
      },
      {
        name: "Virginie",
        date: "December 2022",
        comment:
          "This place exceeded our expectations! The decor was beautiful, the rooms were spacious, and our host Jaime kept in touch with us every step of the way. 10/10",
        avatar:
          "https://a0.muscache.com/im/pictures/user/244ddd04-8fbf-4577-9033-07658463f110.jpg?im_w=240",
        city: "Jupiter, Florida",
      },
      {
        name: "Ahmad",
        date: "August 2023",
        comment:
          "Our 17-night stay at Jaime's home was an absolute delight. The four-bedroom, four-bathroom property offered ample space and comfort for my family. Its convenient location near Denver International Airport and 30 minutes to downtown Denver made it an ideal base for exploring the city. The home was fully equipped with all the necessary appliances, ensuring a seamless and convenient stay. The well-maintained backyard and patio provided a lovely outdoor retreat, perfect for relaxing and enjoying the pleasant weather. One aspect that truly stood out was Jaime's exceptional responsiveness and support throughout our stay. He promptly addressed any inquiries or concerns, ensuring we had a comfortable and enjoyable experience. Overall, Jaime's home exceeded our expectations. Its convenient location, well-appointed amenities, and Jaime's attentive hospitality made our stay truly memorable. I highly recommend this property to anyone seeking a fantastic home away from home in Denver.",
        avatar:
          "https://a0.muscache.com/im/pictures/user/User-400867608/original/29274d5c-24bc-4db8-afa7-3e4a92c592c4.jpeg?im_w=240",
        city: "",
      },
    ],
  },
  // Add more accommodations as needed
];

export default accommodations;
