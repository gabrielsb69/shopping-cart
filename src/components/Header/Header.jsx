import CartButton from "../CartButton/CartButton"
import Products from "../Products/Products"
import SearchBar from "../SearchBar/SearchBar"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
        <Products />

      </div>
    </header>
  )
}

export default Header