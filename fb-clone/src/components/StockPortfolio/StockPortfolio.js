import React, {useState, useEffect} from 'react';

const StockPortfolio = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        const data = await fetch(
            'https://d2kjnw8vmxc1wq.cloudfront.net/api/portfolio/api/user/' + localStorage.getItem('user_id')
        ).then(data => data.json());
        console.log(data);
        const stockList = await data.portfolio;
        console.log(stockList);  //{AAPL: 63, F: 34}
        var to_show = "<br>";
        for (var key in stockList) {
            to_show += 'Stock: ' + key + "<br>" + 'Quantity: '
                + stockList[key] + "<br>" + "<br>";
        }
        document.getElementById("stockList")
            .innerHTML = to_show;
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <p id="stockList"></p>
        </div>
    );
  }
  
  export default StockPortfolio;