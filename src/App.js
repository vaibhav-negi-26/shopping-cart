import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import BuyPage from "./Components/BuyPage"
import Cart from "./Components/Cart"
import { Container, Row, Col } from "reactstrap"

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
      setCartItem([...cartItem, item])
    }
  }

  // buy now
  const buyNow = () => {
    setCartItem([])

    toast("🎉 Purchase Successful 🎉", {
      type: "default",
    })
  }

  // remove item
  const removeItem = (item) => {
    console.log(cartItem)
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id))
    console.log(cartItem)
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
