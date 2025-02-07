import { Link } from "react-router-dom";
import CollegeGallery from "../../CollegeGallery/CollegeGallery";
import Research from "../../Researched/Research";
import AllReview from "../../Reviews/AllReview";
import CollegeCard from "../CollegeCard/CollegeCard";

const Home = () => {
  return (
    <div>
      <CollegeCard></CollegeCard>
      <CollegeGallery></CollegeGallery>
      <Research></Research>
      <AllReview></AllReview>
      <div className="text-center my-16">
        <Link to="/error" className="btn btn-sm hover:bg-purple-700 bg-purple-700 text-white">
         know More about college
        </Link>
      </div>
    </div>
  );
};

export default Home;
