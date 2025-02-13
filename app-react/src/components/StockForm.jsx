import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";


export const StockForm = ({productSelected}) => {

    const { initialProductForm, handlerAddProduct, handlerUpdateProduct } = useContext(ProductContext);

    const [productForm, setProductForm] = useState(initialProductForm);

    const {idCorrelative, sku, name, description, brand, price, units, manufactureDate} = productForm;


    const onInputChange = ({target}) => {
        
        console.log(target.value);
        
        const {name, value} = target;
        
        setProductForm({                                                                                   
            ...productForm,                                                                                
            [name] : value,                                                                            
        })
        
    }


    useEffect(() => {
        setProductForm({
            ...productSelected,
        });
    }, [productSelected]);


    const onSubmit = (event) => {
        
        event.preventDefault();    
        
        console.log('-----product-----1')
        console.log(sku);
        console.log(name);
        console.log(description);
        console.log(brand);
        console.log(price);
        console.log(units);
        console.log(manufactureDate)
        console.log('-----product-----')
        
        if(!sku || !name || !description || !brand || !price || !units || !manufactureDate){                                                           
            
            Swal.fire(
                'Validation error',
                'You must complete all fields in the form.',
                'error'
            );
            
            return;

        }

        if(idCorrelative > 0) {
            console.log('update')
            handlerUpdateProduct(productForm);
        } else {
            console.log("create")
            handlerAddProduct(productForm);
        }

        setProductForm(initialProductForm);    

    }   


    return(

        <>
        
            <div  style={{position:'relative', zIndex:'1'}}>

                <div className="bg-light rounded">
                    <h3 className="text-primary lh-base">Register stock and products</h3>
                </div>
                

                <form onSubmit={onSubmit} className="w-75">

                    <input className="form-control my-3" placeholder="sku" name="sku" value={sku} onChange={ onInputChange }/>
                    <input className="form-control my-3" placeholder="name" name="name" value={name} onChange={ onInputChange }/>
                    <input className="form-control my-3" placeholder="description" name="description" value={description} onChange={ onInputChange }/>
                    <input className="form-control my-3" placeholder="brand" name="brand" value={brand} onChange={ onInputChange }/>
                    <input className="form-control my-3" placeholder="price" name="price" value={price} onChange={ onInputChange }/>
                    <input className="form-control my-3" placeholder="units" name="units" value={units} onChange={ onInputChange }/>
                    <input className="form-control my-3 w-25" type="date" placeholder="manufactureDate" name="manufactureDate" value={manufactureDate} onChange={ onInputChange }/>

                    <input className="form-control my-3 w-75 "  name="idCorrelative" value={idCorrelative} type="hidden"/>

                    <div className="text-start mt-5">
                        <button className="btn btn-primary" type="submit" onChange={ onInputChange }>{idCorrelative > 0 ? 'Update' : 'Create'}</button>
                    </div>

                </form>

            </div>

        </>

    )


}