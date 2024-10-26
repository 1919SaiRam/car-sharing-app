import React  from "react";
import  useState  from "react";
import RideBook from "../RideBooking/RideBooking";

function BookHistory() {

    const [BookHisto , setBookHisto] = useState(" ");

    return (
      <div className="App">
          <h1>Car Book Confirmation </h1>
          
          <RideBook/>
      </div>
    );
  }
  
  export default BookHistory;