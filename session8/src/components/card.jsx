import { useDispatch, useSelector } from "react-redux";
import {clear, deleteCard} from './rtk/slice/cardSlice'
import Container from "react-bootstrap/esm/Container";
import {Button, Table} from 'react-bootstrap'


export default function Cards(){
    let cards = useSelector(state => state.cards);
    if(localStorage.getItem("cards")){
        cards = JSON.parse(localStorage.getItem("cards"))
    }
    console.log(cards);
    const dispatch = useDispatch();
    let totalPrice = cards.reduce((acc,cu) =>{
        acc += (cu.price * cu.quantite);
        return acc
    },0)
    return (
        <Container className="py-5">
            <h1>Card</h1>
            <Button variant="primary" onClick={() => dispatch(clear())}>Clear</Button>
            <h3>Total Price: {totalPrice.toFixed(2)}$</h3>
            <Table striped bordered hover size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>quantite</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => {
                        return (
                            <tr key={card.id}>
                                <td>{card.id}</td>
                                <td>{card.title}</td>
                                <td>{card.description}</td>
                                <td>{card.price}$</td>
                                <td>{card.quantite}</td>
                                <td><Button variant="danger" onClick={() => dispatch(deleteCard(card))}>delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}