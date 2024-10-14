import { GlobalProvide } from './context/GlobalState'
import Header from './components/Header'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import Balance from './components/Balance'
function App(){
  return(

    <GlobalProvide>
      <div className="bg-zinc-900 text-white h-screen">
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
      </div>
    </GlobalProvide>
  )
}

export default App