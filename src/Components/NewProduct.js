import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(object) {
        console.log("I am inside the New Product");

        //calling the funtion
        props.pranay(object);
    }
    return (
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct} />
        </div>
    )
}

export default NewProduct;