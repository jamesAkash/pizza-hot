import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch(clearCart);

  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      {cart.length > 0 ? (
        <div className="mt-6 space-x-2">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button onClick={handleClearCart} type="secondary">
            Clear cart
          </Button>
        </div>
      ) : (
        <h1 className="text-center mt-8 text-3xl">Your Cart is empty :(</h1>
      )}
    </div>
  );
}

export default Cart;
