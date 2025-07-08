import CardContainer from "../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getApiData } from "../APIs/axiosInstance";
import { personURL } from "../APIs/ApisURL";
import LoadingCard from "../components/LoadingCard";

const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
      getApiData(personURL, setPeople);
    }, []);
  
    return (
      <>
        {people.length === 0 ? (
          <LoadingCard />
        ) : (
          <CardContainer element={people} isImagePerson={true} />
        )}
      </>
    );

};

export default People;
