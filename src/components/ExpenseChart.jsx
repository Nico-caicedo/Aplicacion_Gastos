import { VictoryLabel, VictoryPie } from "victory"
import { useGlobalState } from "../context/GlobalState"

function ExpenseChart(){
 const {transactions} =  useGlobalState()

const totalIncome = transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    console.log(totalIncome)

    const totalExpenses = transactions.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1
    console.log(totalExpenses)


    const totalExpensesPercentege = Math.round((totalExpenses / totalIncome) * 100)
    const totalIncomePercentege = 100 - totalExpensesPercentege
    console.log(totalExpensesPercentege)

    return(
        <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentege },
          { x: "Incomes", y: totalIncomePercentege }
        ]}
        animate={{
            duration:200
        }}
        // labels={({datum}) => datum.y}
        labelComponent={<VictoryLabel
        angle={55}
        style={{
            fill:"white"
        }}
        
        />}
      />
    )
}

export default ExpenseChart