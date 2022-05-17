import React, { useState } from 'react';
import Sdata from './Sdata';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

// Hooks useState Example

const Catalog = () => {
  const [Search, SetSearch] = useState("");
  const [Array, SetArray] = useState(Sdata);
  const SearchCard = (event) => {
    const SearchText = event.target.value;
    SetSearch(SearchText);
  }

  const FilterItems = () => {
    if (Search !== "") {
      const FiltArr = Sdata.filter((currElem, index) => {
        return currElem.title === Search;
      });
      SetArray(FiltArr);
    } else {
      SetArray(Sdata);
    }
    console.log(Array);
  }

  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                onChange={SearchCard}
                aria-label="Search" />
              <button className="btn btn-outline-success" type="button" onClick={FilterItems}>Search</button>
            </form>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row" style={{ padding: "5px" }}>Search Text : {Search}</div>
        </div>
        <div className="row">
          {
            Array.map((currItem, index) => {
              return <Card key={index} items={currItem} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Catalog;
