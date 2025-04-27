import Greetings from "@/components/greetings";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";

const Home = async () => {
  const getUser = await getLoggedInUser();
  return (
    <section>
      <Greetings user={getUser?.name || "Guest"} />
      <TotalBalanceBox />
    </section>
  );
};

export default Home;
