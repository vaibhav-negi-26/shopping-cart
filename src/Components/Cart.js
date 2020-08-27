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
  let amount = 0
  cartItem.forEach((e) => {
    amount = parseFloat(e.productPrice) + parseFloat(amount)
  })

  return (
    <Container fluid className="text-right">
      <h1
        className="font-italic mb-md-4"
        style={{ color: "white", textShadow: "2px 2px #888888" }}>
        Your Cart
      </h1>

      {/* cart list group */}
      <ListGroup>
        {cartItem.map((item, index) => (
          <ListGroupItem key={index}>
            <Row>
              <Col>
                <img
                  src={item.TinyImage}
                  alt="tiny_product_img"
                  height="100%"
                  width="100%"
                />
              </Col>
              <Col className="text-center">
                <h5 className="text-uppercase text-primary">
                  <u>{item.productName}</u>
                </h5>
                <p>
                  <b>Price</b>
                </p>
                <p>{item.productPrice}</p>
                <Button
                  color="danger"
                  onClick={() => {
                    removeItem(item)
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
            <Button color="warning" onClick={buyNow}>
              Pay Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h4 className="text-danger"> Cart is empty </h4>
      )}
    </Container>
  )
}

export default Cart
