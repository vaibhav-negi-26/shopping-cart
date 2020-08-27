import React from "react"
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap"

const Cart = ({ cartItem, buyNow, removeItem }) => {
  const amount = 0
  cartItem.forEach((e) => {
    amount = parseFloat(e.productPrice) + parseFloat(amount)
  })

  return (
    <Container fluid>
      <h1 className="text-primary">Your Cart</h1>

      {/* cart list group */}
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem>
            <Row>
              <Col>
                <img src={item.TinyImage} alt="tiny_product_img" width={80} />
              </Col>
              <Col className="text-center">
                <h5>{item.productName}</h5>
                <span>Price :- {item.productPrice}</span>
                <Button
                  className="text-primary"
                  onClick={() => {
                    removeItem()
                  }}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* Conditional rendering for pay card */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} is {amount}
          </CardBody>
          <CardFooter>
            <Button onClick={buyNow}>Pay Now</Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning"> Cart is empty </h1>
      )}
    </Container>
  )
}

export default Cart
