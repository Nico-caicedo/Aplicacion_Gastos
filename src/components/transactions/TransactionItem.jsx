import { useGlobalState } from "../../context/GlobalState"

function TransactionItem({ transaction }) {
    const { transactions, deleteTransaction } = useGlobalState()

    return (

        <li className="bg-zinc-600 text-white px-3 py1 rounded-lg mb-2 w-full flex justify-between items-center" >

            <p className="text-sm">{transaction.description}</p>
            <div>
                <div className="flex justify-between " >
                    <span>${transaction.amount}</span>
                    <div className="flex justify-center items-center" >
                        <button className="bg-rose-800 rounded-full w-5 h-5 flex justify-center items-center" onClick={() => {
                            deleteTransaction(transaction.id)
                        }} >x</button>
                    </div>
                </div>


            </div>
        </li>
    )

}

export default TransactionItem 