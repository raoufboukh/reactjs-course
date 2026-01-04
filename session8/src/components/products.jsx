import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProducts } from './rtk/slice/prodSlice';
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { setCards } from './rtk/slice/cardSlice';


export default function Products(){
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchProducts());
    },[])
    return (
        <>
            <h1>Product Page</h1>
            <Container className='py-3'>
                <Row className='py-3'>
                    {
                        products.map(prod => {
                            return(
                                    <Col key={prod.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img style={{height:'300px'}} variant="top" src={prod.image} />
                                            <Card.Body>
                                                <Card.Title>{prod.title}</Card.Title>
                                                <Card.Text>
                                                    {prod.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    {prod.price}$
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => {
                                                    dispatch(setCards(prod));
                                                }}>Add To Cards</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}