import CardContainer from "../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getApiData } from "../APIs/axiosInstance";
import { tvURL } from "../APIs/ApisURL";
import LoadingCard from "../components/LoadingCard";

const Tv = () => {
    const [tv, setTv] = useState([]);
    useEffect(() => {
      getApiData(tvURL, setTv);
    }, []);
  
    return (
      <>
        {tv.length === 0 ? (
          <LoadingCard />
        ) : (
          <CardContainer element={tv} />
        )}
      </>
    );
};

export default Tv;

