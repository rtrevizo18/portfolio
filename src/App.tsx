import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);


  return <div className="h-screen flex flex-col justify-center items-center gap-5">Count: {count}
    <button className="h-10 w-10 bg-indigo-600" onClick={() => setCount(count + 1)}></button>
  </div>
}

export default App;
