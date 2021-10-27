const api = "xlWsYUzC4pXNjlBmCdSzNN909eCAvE82LP9HWJKV"
const url = `https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=${api}`

const handleSubmit = () => {



  fetch(url).then((res) => res.json())
            .then((data) => console.log(data))


}

