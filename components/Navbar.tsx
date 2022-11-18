import Link from "next/link";
import { BsFillCartCheckFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="nav-container">
      <Link href="/">
        <h2 className="logo">Happy! Shopping</h2>
      </Link>
      <div className="nav-list">
      <Link href="/cart">
        <div className="cart-icon-container">
          <BsFillCartCheckFill size={32} />
          <span className="cart-amount">
            <span>0</span>
          </span>
        </div>
      </Link>

      <Link href='#'>
        <span>Login</span>
      </Link>
      </div>

    </div>
  );
}

export default Navbar;
