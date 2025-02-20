import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useProducts } from "../hooks/useProducts";


export const StockForm = ({productSelected}) => {

    const { initialProductForm, handlerAddProduct, handlerUpdateProduct } = useProducts();

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
            
            Swal.fire({
                title: 'Validation error',
                text: 'You must complete all fields in the form.',
                icon: 'error',
                background: '#212f3d',
                color: '#ccd1d1',
        });
            
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

                <div className="bg-dark rounded">
                    <h3 className="text-secondary lh-base">Register stock and products</h3>
                </div>


                <div className="border rounded border-0" style={{backgroundColor:'rgba(20, 20, 20, 0.90)'}}>


                <div className="" style={{width:  '65%' , margin: '0 auto'}}>
                

                <form onSubmit={onSubmit} className="mt-4 " >

                    <div className="row my-3 pt-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Sku:</label>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control w-50 bg-secondary text-light border-secondary" placeholder="sku" name="sku" value={sku} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Name:</label>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control w-100 bg-secondary text-light border-secondary" placeholder="name" name="name" value={name} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Description:</label>
                        </div>
                        <div className="col-sm-9">
                            <textarea style={{height:'200px'}}type="text" className="form-control w-100 bg-secondary text-light border-secondary" placeholder="description" name="description" value={description} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Brand:</label>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control w-100 bg-secondary text-light border-secondary" placeholder="brand" name="brand" value={brand} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Price:</label>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control w-50 bg-secondary text-light border-secondary" placeholder="$ price" name="price" value={price} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start">
                            <label htmlFor="">Units:</label>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control w-25 bg-secondary text-light border-secondary" placeholder="units" name="units" value={units} onChange={ onInputChange }/>
                        </div>
                    </div>


                    <div className="row my-5 ms-2">
                        <div className="col-sm-3 col-form-label text-danger border rounded border-0 text-start ">
                            <label htmlFor="">Manufacture date:</label>
                        </div>
                        <div className="col-sm-9">
                        <input className="form-control w-50 bg-secondary text-light border-secondary" type="date" placeholder="manufactureDate" name="manufactureDate" value={manufactureDate} onChange={ onInputChange }/>
                        </div>
                    </div>
                    
                    
                    <input className="form-control my-3"  name="idCorrelative" value={idCorrelative} type="hidden"/>


                    <div className="text-end pb-5 ">
                        <button className="btn btn-secondary rounded-pill opacity-75" type="submit" onChange={ onInputChange }>{idCorrelative > 0 ? 'Update' : 'Create'}</button>
                    </div>

                </form>


                </div>

                </div>

            </div>

        </>

    )


}