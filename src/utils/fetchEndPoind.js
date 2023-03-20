import { useState, useEffect } from "react";
import fetchData from "./api";

const FetchEndPoint = (endpoint) => {
  const [endPointData, setEndPointData] = useState();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [endpoint]);

  const getData = async () => {
    const data = await fetchData(endpoint);
    setEndPointData(data);
  };
  return endPointData;
};

export default FetchEndPoint;
