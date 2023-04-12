import Card from "../../components/card/CardComponent";
import { category } from "../../api/tmdbApi";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import "./favoritePage.scss";

const FavoritePage = () => {
  const [favoritedMovie, setFavoritedMovie] = useState(null);
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    if (!currentUser) return;
    const unSubDoc = onSnapshot(doc(db, "users", currentUser?.uid), (doc) => {
      setFavoritedMovie(doc.data()?.favorites.slice().reverse());
    });

    return () => unSubDoc();
  }, [currentUser]);

  return (
    <div className="favorited__movie">
      <div className="favorited__movie-header">
        <h2>my favorite</h2>
      </div>
      <div className="favorited__movie-grid">
        {favoritedMovie?.map((movie, index) => {
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
  );
};

export default FavoritePage;
