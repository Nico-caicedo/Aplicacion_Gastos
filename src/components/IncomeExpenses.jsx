import { useGlobalState } from "../context/GlobalState"




function IncomeExpenses() {

    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)
    
    const income = amount
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)

        const expense = amount
        .filter(item => item < 0)
        .reduce((acc, item) => acc += item, 0) * -1
    return (
        <>
            <div>
                <h4>Income</h4>
                <h2>${income}</h2>
            </div>

            <div>
                <h4>Expenses</h4>
                <p>{expense}</p>
            </div>
        </>

    )
}


export default IncomeExpenses