import { useState, useEffect } from "react";
import './App.css';
import QuoteCard from "./components/QuoteCard"

function App() {
const [quoteobj, setQuote] = useState({})
const [isLoading, setLoading] = useState(false)

async function quotegenerator() {
  const options = {
    method: 'GET',
    headers: {
      'X-API-Key': 'd5XNR8cKz0GT1uoI3HttXg==m0LAtX56TaDfHGPn',
    }
  };
  setLoading(true);
  const response= await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', options);
  const data = await response.json();
  setQuote(data[0]);
  setLoading(false);
}

  useEffect(()=>
  {
    quotegenerator();
  },[])
  return (
    <div className="App">
        <QuoteCard quote={!isLoading?quoteobj.quote:"Loading..."} quotegenerator={quotegenerator}></QuoteCard>
    </div>
  );
}

export default App;
