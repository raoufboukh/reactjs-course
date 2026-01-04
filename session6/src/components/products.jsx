import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { useRecoilState } from "recoil"
import { at } from "./Atom"

function Products() {
    const [products, setProducts]  = useRecoilState(at)
    return(
        <div className="products">
            <h1>Products {products.length}</h1>
            {products.map(pro => <h3 key={pro.id}>{pro.name}</h3>)}
        </div>
    )
}


export default Products;