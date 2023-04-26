import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import Card from "../../components/card/CardComponent";
import { category } from "../../api/tmdbApi";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import Lottie from "lottie-react";
import exploreAnimation from "../../assets/explore-movie.json";
import "./historyPage.scss";

const HistoryPage = () => {
  const [recentlyWatch, setRecentlyWatch] = useState(null);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) return;
    const unSubDoc = onSnapshot(doc(db, "users", currentUser?.uid), (doc) => {
      setRecentlyWatch(doc.data()?.recentlyWatch.slice().reverse());
    });

    return () => unSubDoc();
  }, [currentUser]);

  return (
    <>
      {recentlyWatch?.length !== 0 ? (
        <div className="recently__movie">
          <div className="recently__movie-header">
            <h2>Recently Watch</h2>
          </div>
          <div className="recently__movie-grid">
            {recentlyWatch?.map((movie, index) => {
              return (
                <Card
                  item={movie}
                  key={index}
                  category={category.movie || category.tv}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="recently__empty">
          <span>
            You hasn't watched any movie yet. Explore and watch some!!!
          </span>
          <div className="recently__empty-animation">
            <Lottie animationData={exploreAnimation} loop={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryPage;
