import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 font-montserrat text-sm text-stone-900 md:text-base">
        What's your name? 😎
      </p>

      <input
        type="text"
        placeholder="Your full name ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input border mb-8 w-72 pl-4 py-1 placeholder:text-slate-600"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
