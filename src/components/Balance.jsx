import { useContext } from "react"
import { useGlobalState } from "../context/GlobalState"

function Balance()
{
    const {transactions} = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0)
 return(
    <div className="flex justify-between items-center">
        <h3>Your Balance</h3>
        <h1 className="text-2xl font-bold">${total}</h1>
    </div>
 )

}

export default Balance 