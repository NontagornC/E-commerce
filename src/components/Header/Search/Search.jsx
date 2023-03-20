import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchData();
  }, []);

  const searchResults = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const navigate = useNavigate()

  return (
    <div className="search_model">
      <div className="form_field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Items"
          onChange={(e)=>setSearchInput(e.target.value)}
        />
        <MdClose className="close_btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search_result_content">
        <div className="search_results">
        {searchResults.map((e) => (
            <div className="search_result_item" key={e.id} onClick={()=>navigate(`/product/${e.id}`)}>
                <div className="img_container">
                    <img src={e.image} alt="Product img" />
                </div>
                <div className="product_details">
                    <span className="name">{e.title}</span>
                    <span className="description">{e.description}</span>
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
