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
        if(document.getElementById('transx_buy').checked) {
            buyStock();
        }else if(document.getElementById('transx_sell').checked) {
            sellStock();
        }
        const log = document.getElementById('log');
        log.textContent = `Purchase order submitted`;
    };

    const buyStock = async() => {
        getStockPrice();
        var url = 'https://d2kjnw8vmxc1wq.cloudfront.net/api/transaction/v1/buy/' + localStorage.getItem('user_id');
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
        var data = JSON.stringify({
                                            "ticker": items["ticker"],
                                            "quantity": items["quantity"],
                                            "price": items["price"]
        });
        xhr.send(data);
    }

    const sellStock = async() => {
        getStockPrice();
        var url = 'https://d2kjnw8vmxc1wq.cloudfront.net/api/transaction/v1/buy/' + localStorage.getItem('user_id');
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
        var data = JSON.stringify({
            "ticker": items["ticker"],
            "quantity": items["quantity"],
            "price": items["price"]
        });
        xhr.send(data);
    }

    const getStockPrice = async() => {
        const data = await fetch(
            //'http://127.0.0.1:5000/api/stocks/' + items["ticker"]
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/stocks/' + items["ticker"]
        ).then(data => data.json());
        console.log(data);
        console.log(data.latest_price);
        items["price"] = data.latest_price;
    }

    return (
        <div>
            <p>Transaction Type</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Buy
                        <input
                            type="radio" name="transaction" id="transx_buy" value="Buy"
                        />
                    </label>
                    <label>Sell
                        <input
                            type="radio" name="transaction" id="transx_sell" value="Sell"
                        />
                    </label>
                </div>
                <div>
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
                </div>
            </form>
        </div>
    );
  }
  
  export default BuySellStocks;