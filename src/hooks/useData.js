import { useState, useEffect } from "react";

const useData = (url) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(myData => setPerson(myData));
  }, []);

  return person;
}

export default useData;
