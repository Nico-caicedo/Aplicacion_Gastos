import { GlobalProvide } from './context/GlobalState'
import Header from './components/Header'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import Balance from './components/Balance'
import ExpenseChart from './components/ExpenseChart'
function App() {
  return (

    <GlobalProvide>
      <div className="bg-zinc-900 text-white h-screen flex 
      justify-center items-center">
      <div className='container mx-auto w-3/6'>
      <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
          <div>
            {/* <Header /> */}
            <h1 className='text-center font-bold text-4xl'>Expense Tracker</h1>
            <IncomeExpenses />
            <Balance />
         
              <TransactionForm />
         
          </div>
          <div className='flex flex-col'>
            <ExpenseChart />
          <TransactionList />
          </div>
        </div>
      </div>
      </div>
    </GlobalProvide>
  )
}

export default App