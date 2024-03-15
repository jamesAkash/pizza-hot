import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-yellow-500 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-red-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
      <div className="relative">
        <video
          className="rounded-3xl brightness-[-10%] mt-8"
          autoPlay
          loop
          src="./hero.mp4"
        ></video>
        <h1 className="absolute top-1/2  font-serif font-extrabold text-[40px] text-slate-900 bg-slate-50">
          Have a bite!
        </h1>
      </div>
    </div>
  );
}

export default Home;
