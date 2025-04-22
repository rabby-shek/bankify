import Greetings from "@/components/greetings";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  return (
    <section>
      <Greetings user="Shaek Saheb" />
      <TotalBalanceBox  />
    </section>
  );
};

export default Home;
