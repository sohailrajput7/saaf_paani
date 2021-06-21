import React, { useState, useEffect } from "react";

export default () => {
  const [location, setLocation] = useState({
    latt: 0,
    long: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;

      setLocation({
        latt,
        long,
      });
    });
  }, []);

  return location;
};
