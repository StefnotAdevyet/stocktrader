
const handleSubmit = () => {
  // event.preventDefault();
  const display = document.getElementsByClassName('display')
  const api = "xlWsYUzC4pXNjlBmCdSzNN909eCAvE82LP9HWJKV"
  let url = `https://api.stockdata.org/v1/data/intraday?symbols=AAPL&api_token=${api}`


  fetch(url).then((res) => res.json())
            .then((data) => {
              console.log(data)
            })
            .catch((err) => console.error(err))



}

