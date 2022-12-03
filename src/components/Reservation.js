import React from "react";
import { useForm } from "react-hook-form";
const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="reservation" id="reservation">
      <h2 className="reservation__heading">Reservation</h2>
      <div className="reservation__content">
        <div className="reservation__content-info">
          <h3>
            Make a romantic <br />
            Atmosphere Here
          </h3>
          <p>
            Make online reservations read restaurant reviews
            <br /> from diners, and earn points towards free meals.
            <br /> Grab your seat now
          </p>
        </div>
        <div className="reservation__content-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className="name"
              {...register("Name", { required: true, maxLength: 80 })}
            />
            <select {...register("Person", { required: true })}>
              <option value="0">Table For:</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
            <div className="reservation__content-form-flex">
              <input
                type="date"
                {...register("Date", { required: true, maxLength: 20 })}
              />
              <input
                type="time"
                {...register("Time", { required: true, maxLength: 20 })}
              />
            </div>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
