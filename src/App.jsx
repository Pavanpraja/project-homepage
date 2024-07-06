import './index.css'
import Homepage from './Homepage'

function App() {

  return (
    <>
     <div className='h-screen -mt-[0rem] overflow-x-hidden overflow-y-hidden'>
     <div className='animate-pulse ani-bac w-[100%] h-[100%] absolute'></div>
      <Homepage />
     </div>
    </>
  )
}

export default App
