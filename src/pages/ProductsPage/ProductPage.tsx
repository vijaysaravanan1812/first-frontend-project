import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import {  useCard } from "../../contexts/CardContext";


const ProductPage = () => {

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Item[]>([]);
  const CardContext = useCard();
  console.log(CardContext);
  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product : Item) => {
      console.log(product);

      CardContext.addToCard(product);
  }

  // Function to get unique categories from products
  const getUniqueCategories = () => {
    const uniqueCategories: string[] = [];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });
    return uniqueCategories;
  };

  return (
    <div >
      <div className="container py-5" >
        <h1 className="text-center mb-4">Products</h1>
        <p className="text-center">Explore our wide range of products below:</p>
        {
          isLoading ? (<div className='text-center'>
          <div className='spinner-border text-success' role='status'>
          </div>
            <p>Please wait</p>
          </div>) : null
        }
        {getUniqueCategories().map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <Row xs={1} md={4} className="g-4">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <Col key={product.id}>
                    <Card className="h-100 shadow" style={{background:"#fafafa"}}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.title}
                        height={280}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Button
                          className="badge rounded-pill text-bg-primary"
                          data-bs-toggle="collapse"
                          data-bs-target={`#descriptionCollapse${product.id}`}
                        >
                          Read description
                        </Button>
                        <div
                          className="collapse"
                          id={`descriptionCollapse${product.id}`}
                        >
                          <Card.Text>{product.description}</Card.Text>
                        </div>
                        <p>{product.price} Rs</p>
                      </Card.Body>
                      <Card.Footer>
                        <Button 
                        variant="primary" 
                        className="me-2"
                        onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </Button>
                        <Button variant="outline-danger">Favorite</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
