import React from "react";
import "../CSS/restaurant.css";
import { Restaurants } from "../data/Restaurants";
import { Link } from "react-router-dom";
export default function restaurant() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-md-12 title-block">
              <h1 className="main-title">Manage Restaurant</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {Restaurants.map((restaurant) => (
              <Link to={`table/${restaurant.id}`} key={restaurant.id}>
                <div className="wrap animate pop">
                  <div className="overlay">
                    <div className="overlay-content animate slide-left delay-2">
                      <h1 className="animate slide-left pop delay-4 title-restaurant">
                        {restaurant.name}
                      </h1>
                      <p
                        className="animate slide-left pop delay-5"
                        style={{ color: "white" }}
                      >
                        {restaurant.address}
                      </p>
                    </div>
                    <img
                      src={restaurant.image}
                      className="image-content animate slide delay-5"
                      alt="#"
                    />
                  </div>
                  <div className="text">
                    <h2>
                      Restaurant Name : <em> {restaurant.name}</em>
                    </h2>
                    <div className="br"></div>
                    <h4>Address : {restaurant.address}</h4>
                    <h4>Open Hours : {restaurant.openHours}</h4>
                    <h4>Phone : {restaurant.phone}</h4>
                    <div className="br"></div>
                    <p>{restaurant.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
