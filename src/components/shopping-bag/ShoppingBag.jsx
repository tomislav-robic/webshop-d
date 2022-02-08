import './ShoppingBag.css';
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class ShoppingBag  extends React.Component{
    constructor() {
        super();
        this.items = new Array();
        if (localStorage.getItem("items")) {
            this.items = JSON.parse(localStorage.getItem("items"));
            this.sum = 0;
    
            for (let i = 0; i < this.items.length; i++) {
                this.sum += this.items[i].price
            }
        }
    }

    Cancel() {
        localStorage.clear();
        this.items = {};
        window.location.reload();
    }

    Buy() {
        localStorage.clear(); 
    }

    render() {
        return (
            <div >
                <Table striped bordered hover className="cartTable">
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th >Description</th>
                            <th >Quantity</th>
                            <th >Price (€)</th>
                            <th >Remove</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.items.map(item => (
                            <tr key={item.id}>
                                <td align="center">
                                    <img src={item.imageUrl} alt="" width="10%"></img>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>1</td>
                                <td>{item.price}</td>
                                <td>-</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="total">
                    <div className = "space">Ukupno :</div>
                    <div className = "space">{this.sum} €</div>
                </div >
                <div className="total">
                    <div className = "space">
                        <a href="/Finish"><Button variant="success" onClick = {() => this.Buy()}>Buy</Button></a>
                    </div>
                    <div className = "space">
                        <Button variant="danger" onClick = {() => this.Cancel()}>Cancel</Button>
                    </div>
                </div>
 

            </div>

        )
    }

}

export default ShoppingBag;