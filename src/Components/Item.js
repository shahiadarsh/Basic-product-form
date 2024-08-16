import './Item.css';

function Item(props){
    const name = props.name;
    return (<div>
           <p className="nirma">{name}</p>
            {props.children}
    </div>);
}


//Syntax to export
export default Item;