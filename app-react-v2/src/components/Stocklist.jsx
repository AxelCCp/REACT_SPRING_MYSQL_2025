import { NavLink } from "react-router-dom";
import { useLogin } from "../auth/hooks/useLogin";
import { useProducts } from "../hooks/useProducts";


export const Stocklist = () => {

    const { products, handlerRemoveProduct } = useProducts();

    //const { login } = useContext(LoginContext);


    const { login } = useLogin();

    console.log('Stocklist - login: ', login)

    //console.log('products: ', products);

    return(

        <>

            <div className="bg-dark rounded" style={{zIndex: '-1'}}>
                <h3 className="text-secondary lh-base">Stock list</h3>
            </div>

            <div className="" style={{zIndex: '-1'}}>

            <table className="table text-light mt-3 w-100" style={{backgroundColor:'rgba(20, 20, 20, 0.90)'}}>

                <thead>
                    <tr className="align-middle border-dark">
                        <th className="bg-light opacity-50 border-0 text-dark">Id</th>
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
                            
                            <tr className="text-start border-dark" key={idCorrelative}>
                                <td className="bg-light opacity-50 border-0 text-dark">{idCorrelative}</td>
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
                                            <NavLink className='btn btn-outline-secondary btn-sm rounded-pill' to={'/stock/register/' + idCorrelative}>
                                                Update
                                            </NavLink>
                                        </td>

                                        <td className="text-center">
                                            <button className='btn btn-outline-danger btn-sm rounded-pill' onClick={() => handlerRemoveProduct(idCorrelative)}>
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