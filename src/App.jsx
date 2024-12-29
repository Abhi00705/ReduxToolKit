import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] bg-sky-700 flex  flex-col gap-10 items-center'>
      <h1 className=' mt-[2rem] text-center font-sans font-bold text-3xl'>Learn about redux </h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
