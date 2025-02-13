import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { NavLink } from "react-router-dom";
import { LoginContext } from "../auth/context/LoginContext";


export const Stocklist = () => {

    const { products, handlerRemoveProduct } = useContext(ProductContext);

    const { login } = useContext(LoginContext);

    //console.log('Stocklist - login: ', login)

    //console.log('products: ', products);

    return(

        <>

            <div className="bg-light rounded" style={{zIndex: '-1'}}>
                <h3 className="text-primary lh-base">Stock list</h3>
            </div>

            <div className="bg-light rounded" style={{zIndex: '-1'}}>

            <table className="table table-light mt-3 opacity-75 w-100">

                <thead>
                    <tr className="align-middle">
                        <th className="bg-info opacity-75 border-0">Id</th>
                        <th>Sku</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Units</th>
                        <th>Manufacture date</th>

                        {
                            !login.isAdmin || 

                            <>
                                <th>Update</th>
                                <th>Delete</th>
                            </>
                        }
                        
                    </tr>
                </thead>

                <tbody className="align-middle">

                    {
                        products.map(({idCorrelative, sku, name, description, brand, price, units, manufactureDate }) => (
                            
                            <tr className="text-start" key={idCorrelative}>
                                <td className="bg-info opacity-50 border-0">{idCorrelative}</td>
                                <td>{sku}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{brand}</td>    
                                <td>{price}</td>
                                <td>{units}</td>
                                <td>{manufactureDate}</td>


                                {
                                    !login.isAdmin || 
                                    
                                    <>

                                        <td className="text-center">
                                            <NavLink className='btn btn-outline-success btn-sm opacity-75 rounded-pill' to={'/stock/register/' + idCorrelative}>
                                                Update
                                            </NavLink>
                                        </td>

                                        <td className="text-center">
                                            <button className='btn btn-outline-danger btn-sm opacity-75 rounded-pill' onClick={() => handlerRemoveProduct(idCorrelative)}>
                                                Del
                                            </button>
                                        </td>

                                    </>
                                }

                            </tr>
                            
                        ))
                    }

                   

                </tbody>

            </table>

            

            </div>

        </>

    )


}