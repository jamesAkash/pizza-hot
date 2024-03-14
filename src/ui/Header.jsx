import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-red-600 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest text-slate-100 font-bold">
        Pizza🔥Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
