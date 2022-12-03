import React from "react";
import Carousel from "react-elastic-carousel";
import cardImg1 from "../assets/cardImg1.png";
import cardImg2 from "../assets/cardImg2.png";
import cardImg3 from "../assets/cardImg3.png";
const Dishes = () => {
  const Data = [
    {
      id: "jghuirhgirnvuernfkn",
      name: "Pecan Taco",
      img: cardImg1,
      ingredient: [
        { id: "kasjdoiasjdf", text: "Pecan “meat” " },
        {
          id: "asdfhasihfdiweq",
          text: "Pico de gallo, jalapeño,",
        },
        {
          id: "asidfyhawiefhiawehf",
          text: "Tajín seasoning.",
        },
      ],
      price: "$ 30.00",
    },
    {
      id: "tgihtihjosjgifhgirb",
      name: "Butcher's Feast",
      img: cardImg2,
      ingredient: [
        { id: "aifhaihfiahfioeh", text: "Grilled Beef" },
        {
          id: "adfhgiayhweqiougsdjvbsfjk",
          text: "Marinated galbi",
        },
        {
          id: "aisdhasifhioasfy93e",
          text: "Samjang sauce",
        },
      ],
      price: "$ 187.00",
    },
    {
      id: "aishfiuoehfoehjgiornfvkdn",
      name: "Pheasant",
      img: cardImg3,
      ingredient: [
        { id: "aisdhiahfia", text: "Pheasant breasts" },
        {
          id: "ajfkasifhidfghiegfy",
          text: "Braised onions and extra meatballs",
        },
        {
          id: "asidfhiegfy8ierygusdghu",
          text: "Crispy sage leaves",
        },
      ],
      price: "$ 115.00",
    },
    {
      id: "aijkshdiefhierhehriof",
      name: "Butcher's Feast",
      img: cardImg2,
      ingredient: [
        { id: "aifhieyug89orygihgsdufgh", text: "Grilled Beef" },
        {
          id: "aihjfiehiehihefoij",
          text: "Marinated galbi",
        },
        {
          id: "ashfiehgfoerhohe",
          text: "Samjang sauce",
        },
      ],
      price: "$ 187.00",
    },
    {
      id: "ashdiefhirehfkjfdo",
      name: "Pecan Taco",
      img: cardImg1,
      ingredient: [
        { id: "asojfoejfoejo", text: "Pecan “meat” " },
        {
          id: "aowjfoeg0pro",
          text: "Pico de gallo, jalapeño,",
        },
        {
          id: "afiheireiofoehj",
          text: "Tajín seasoning.",
        },
      ],
      price: "$ 30.00",
    },
    {
      id: "ahdieifheifhiehieifhi",
      name: "Pheasant",
      img: cardImg3,
      ingredient: [
        { id: "asfheiohpoehg9irhgie", text: "Pheasant breasts" },
        {
          id: "ahfioghorhgirhg",
          text: "Braised onions and extra meatballs",
        },
        {
          id: "asifheifoefjo",
          text: "Crispy sage leaves",
        },
      ],
      price: "$ 115.00",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ];
  return (
    <section className="dishes" id="menu">
      <div className="dishes__heading">
        <h4>Specialities</h4>
        <h2>Our Popular Dishes</h2>
      </div>

      <Carousel breakPoints={breakPoints} className="dishes__content">
        {Data.map((item, index) => {
          return (
            <div className="dishes__content-single" key={index}>
              <div className="dishes__content-card">
                <img src={item.img} alt="cardImg" />

                <div className="dishes__content-card-info">
                  <h2>{item.name}</h2>
                  <ul>
                    {item.ingredient.map((items) => {
                      return <li key={item.id}>{items.text}</li>;
                    })}
                  </ul>
                  <h1>{item.price}</h1>
                </div>
              </div>
              <h2 className="dishes__content-single-name">{item.name}</h2>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Dishes;
