import React, { useState } from "react"
import { toast } from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import BuyPage from "./Components/BuyPage"

const App = () => {
  // state
  const [cartItem, setCartItem] = useState([])

  // function for adding item in cart
  const addInCart = (item) => {
    const AvailableInCart = cartItem.findIndex((arr) => {
      return item.id === arr.id
    })

    if (AvailableInCart !== -1) {
      toast("Already Present ✌️", {
        type: "error",
      })
    } else {
      setCartItem([...setCartItem, item])
    }
  }

  // buy now
  const buyNow = () => {
    setCartItem([])

    toast("Purchase Successful 🎊", {
      type: "default",
    })
  }

  // remove item
  const removeItem = (item) => {
    setCartItem([cartItem.filter((singleItem) => singleItem.id !== item.id)])
  }

  return (
    <div className="App">
      <BuyPage addInCart={addInCart} />
    </div>
  )
}

export default App
