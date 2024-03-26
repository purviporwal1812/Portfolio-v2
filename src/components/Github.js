import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/purviporwal1812")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const { id } = useParams();
  return (
    <>
      Github : {id}
      <div>Repos : {data.public_repos}</div>
      <div>
        <img src={data.avatar_url} width={100} height={100}></img>
      </div>
    </>
  );
}
