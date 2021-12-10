import React, {useState, useEffect} from 'react';

const BuySellStocks = () => {
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setItems(values => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(items);
        buyStock();
        event.preventDefault();
        const log = document.getElementById('log');
        log.textContent = `Purchase order submitted`;
    };

    const buyStock = async() => {
        var url = 'https://d2kjnw8vmxc1wq.cloudfront.net/api/portfolio/api/buy/' + localStorage.getItem('user_id');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        var data = JSON.stringify({"ticker": items["ticker"], "quantity": items["quantity"]});
        xhr.send(data);
    }

    return (
        <div>
            <p>Stock Transactions:</p>
            <form onSubmit={handleSubmit}>
                <input type="radio" id="buy" name="transaction" value="buy" checked></input>
                <label for="buy">Buy </label>
                <input type="radio" id="sell" name="transaction" value="sell"></input>
                <label for="sell">Sell </label>
                <label>Enter ticker:
                    <input
                        type="text"
                        name="ticker"
                        value={items.ticker || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter quantity:
                    <input
                        type="number"
                        name="quantity"
                        value={items.quantity || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
                <p id="log"></p>
            </form>
        </div>
    );
  }
  
  export default BuySellStocks;