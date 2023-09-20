import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Salvation from "./Salvation";
import Sermon from "./Sermon";
import WeeklyActivities from "./WeeklyActivities";

function Home() {
  return (
    <div>
      <Banner />
      <WeeklyActivities />
      <Sermon />
      <Salvation />
      <NewsLetter />
    </div>
  );
}

export default Home;
