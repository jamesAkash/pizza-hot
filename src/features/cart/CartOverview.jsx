import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartPrice);
  //below is directly doing calculations,not recommended
  const totalPrice = useSelector((store) =>
    store.cart.cart.reduce((acc, curr) => (acc += curr.totalPrice), 0)
  );

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>Rs {totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
