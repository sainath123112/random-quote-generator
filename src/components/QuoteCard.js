import "./QuoteCard.css";

function QuoteCard(props)
{
    return(
        <div className="quotecard">
            <p><em>{props.quote}</em></p>
            <button onClick={props.quotegenerator}>Generate New Quote</button>
        </div>
    );
}

export default QuoteCard;