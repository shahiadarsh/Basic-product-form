import './ProductForm.css';
import {useState} from 'react';

function ProductForm(props) {

    //Another method to handle all parameter at a time



    //this is way to handle all parameter one by one
    const [newTitle,setTitle] = useState("");
    const [newDate,setDate] = useState("");

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(title);
        // console.log(date); 
    }

    function submitHandler(event){
            event.preventDefault();

            const productData = {
                title:newTitle,
                date:newDate,
            };

            // console.log(productData);
            props.onSaveProduct(productData);

            setTitle('');
            setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-product_controls'>
                <div className='new-product_control'>
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
                </div>

                <div className='new-product_control'>
                    <label>Date</label>
                    <input type="Date" value={newDate} onChange={dateChangeHandler}></input>
                </div>

                <div className='new-product_button'>
                    <button type="submit">Add Product</button>
                </div>

            </div>
        </form>
    )
}

export default ProductForm;