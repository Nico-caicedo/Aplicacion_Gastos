import { useGlobalState } from "../context/GlobalState"




function IncomeExpenses() {

    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)
    
    const income = amount
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

        const expense = amount
        .filter(item => item < 0)
        .reduce((acc, item) => acc += item, 0) * -1
        .toFixed(2);
    return (
        <>
            <div className="flex justify-between items-center my-2">
                <h4>Income</h4>
                <h2>${income}</h2>
            </div>

            <div className="flex justify-between items-center my-2" >
                <h4>Expenses</h4>
                <p>{expense}</p>
            </div>
        </>

    )
}


export default IncomeExpenses