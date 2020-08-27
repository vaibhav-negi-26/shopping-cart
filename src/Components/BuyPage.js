import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Container, Row, Col } from "reactstrap"
import { random, commerce } from "faker"
import MyCard from "./Card"

const apiKey = process.env.REACT_APP_API_KEY
const url = process.env.REACT_APP_URL

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([])

  //   fetching data from pixels API using axios
  const fetchPhoto = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    })

    const { photos } = data

    const allProducts = photos.map((photos) => ({
      SmallImage: photos.src.medium,
      TinyImage: photos.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }))

    setProduct(allProducts)
  }

  useEffect(() => {
    fetchPhoto()
  }, [])

  return (
    <Container>
      <h1
        className="font-italic"
        style={{ color: "white", textShadow: "2px 2px #888888" }}>
        Product Section
      </h1>
      <Row>
        {product.map((product, index) => (
          <Col md={6} key={product.id}>
            <MyCard product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BuyPage
