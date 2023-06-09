import { Link } from "react-router-dom";

const Product = ({ id, name, image, price, category }) => {
    return (
        <Link to={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 2,
                        }).format(price / 100)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;