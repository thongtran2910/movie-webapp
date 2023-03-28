import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const CastList = ({ id }) => {
  const { category } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const fetchCastList = async () => {
      const res = await tmdbApi.getCredits(category, id);
      setCastList(res.cast.slice(0, 5));
    };
    fetchCastList();
  }, [category, id]);
  return (
    <div className="casts">
      {castList.map((cast, index) => {
        return (
          <div key={index} className="casts__item">
            <div
              className="casts__item-img"
              style={{
                backgroundImage: `url(${apiConfig.w500Image(
                  cast.profile_path
                )})`,
              }}
            ></div>
            <p className="casts__item-name">{cast.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CastList;
