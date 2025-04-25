"use client";
import React, { useState, useContext, useEffect } from "react";
import InputItem from "./InputItem";
import GoogleWrapper from "./GoogleWrapper";
import { SourceContext } from "@/context/SourceContext";
import { DestinationContext } from "@/context/DestinationContext";
import CarListOptions from "./CarListOptions";
import axios from "axios";
import {  getDoc, updateDoc, setDoc, doc } from "firebase/firestore";
import {db} from "../../firebase"

const SearchSection = () => {
  const { Source } = useContext(SourceContext);
  const { Destination } = useContext(DestinationContext);
  const [distance, setDistance] = useState(null);
  const [rideType, setRideType] = useState("now");

  let id=""

  const user = async () => {
    const response = await axios.get("/api/getuser")
    console.log("USER ID ",response.data.id)
    id=response.data.id
  }

  const calculateDistance = async () => {
    if (Source && Destination) {
      const dist = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(Source.lat, Source.lng),
        new google.maps.LatLng(Destination.lat, Destination.lng)
      );

      setDistance(dist * 0.01); // Convert meters to kilometers
      try {
        const newData = {
          source: Source.name,
          destination: Destination.name
        };
      
        const docRef = doc(db, "users", "list");
        console.log(docRef)
        const docSnap = await getDoc(docRef);
      
        if (docSnap.exists()) {
          const existingData = docSnap.data().users || [];
          const updatedData = [...existingData, newData];
          await updateDoc(docRef, { users: updatedData });
        } 
        else {
          // initialize the array properly when creating new doc
          await setDoc(docRef, { users: [newData] });
          console.log("New document created with user data.");
        }
      } catch (error) {
        console.log("Error storing in DB:", error);
      }
    }
    
  };

  useEffect(() => {
    user()
  }, [user]);

  return (
    <div>
      <div className="p-2 md:p-6 border-[2px] rounded-xl">
        <p className="text-[20px] font-bold mb-2">Get A Ride</p>
        <GoogleWrapper>
          <InputItem type="source" />
          <InputItem type="destination" />
        </GoogleWrapper>

        {/* Ride Type Toggle */}
        <div className="flex items-center gap-3 mt-4">
          <label className="font-medium">Ride Type:</label>
          <select
            className="border px-3 py-2 rounded-lg"
            value={rideType}
            onChange={(e) => setRideType(e.target.value)}
          >
            <option value="now">Ride Now</option>
            <option value="schedule">Schedule for Later</option>
          </select>
        </div>

        <button
          className="bg-black text-white py-3 rounded-lg mt-3 w-full"
          onClick={calculateDistance}
          disabled={!Source || !Destination}
        >
          Search
        </button>
      </div>

      {distance && <CarListOptions distance={distance} />}
    </div>
  );
};

export default SearchSection;
