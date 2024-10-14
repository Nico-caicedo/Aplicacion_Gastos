import { useContext } from "react"
import { useGlobalState } from "../context/GlobalState"

function Balance()
{
    const {transactions} = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0)
 return(
    <div>
        <h3>Balance</h3>
        <h1>${total}</h1>
    </div>
 )

}

export default Balance 