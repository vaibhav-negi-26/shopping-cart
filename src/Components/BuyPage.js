import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Container, Row, Col } from "reactstrap"
import { random, commerce } from "faker"

const apiKey = "563492ad6f9170000100000115906cf8d3cc41a0ad73b903d43ae7bf"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

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
      <Row>
        <Col>
          {product.map((product, index) => (
            <span key={index}> {product.productName} </span>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default BuyPage