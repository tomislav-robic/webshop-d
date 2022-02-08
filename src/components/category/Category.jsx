import './Category.css';
import Item from '../item/Item.jsx';

function Category({category}) {
    return (
        <div>
            <div className = "caption">{category.title}</div>
            <div  className = "categories">
                {category.items.map(item => (
                    <Item item = {item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Category;