import './Item.css';
import Button from 'react-bootstrap/Button';

function Item({item}) {

    function AddToCart() {
        let items = new Array();
        items = JSON.parse(localStorage.getItem("items"));
        if (items) {
            var result = items.find(obj => {
                return obj.id == item.id
              });
            if (result === undefined) {items.push(item);} 
        } else {
            items = [item];
        }
        localStorage.setItem("items", JSON.stringify(items));
    }

    return (
            <div className='card'>
                <p className = 'imgThumb'>
                    <img width = '300px' height='300px' src = {item.imageUrl} alt=""></img>
                    <Button variant="light" onClick={() => AddToCart()}> Add to cart</Button>
                </p>
                <div className='itemInfo'>
                    <div className='name'>{item.name}</div>
                    <div className ='price'>{item.price} €</div>
                </div>
            </div>
    )
}

export default Item;