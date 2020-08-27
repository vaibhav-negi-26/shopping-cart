import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"

const MyCard = ({ addInCart, product }) => {
  return (
    <Card className="my-3">
      <CardImg top height="300" width="100%" src={product.SmallImage} />
      <CardBody className="text-center">
        <CardTitle>
          <h5 className="text-uppercase">{product.productName}</h5>
        </CardTitle>
        <CardText className="secondary">
          MRP :- Rs {product.productPrice}
        </CardText>
        <Button
          color="success"
          onClick={() => {
            addInCart(product)
          }}>
          Buy Now 🛍
        </Button>
      </CardBody>
    </Card>
  )
}

export default MyCard
