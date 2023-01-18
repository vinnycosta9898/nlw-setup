import logoImg from './assets/logo.svg'
import { Plus } from 'phosphor-react';

function App() {
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logoImg} alt="habits"></img>
            <button 
              type="button"
              className="border border-violet-500 font-semibold rounded-lg px-6 py-4 text-white flex items-center gap-3 hover:border-violet-300"
            >
              <Plus size={20} className="text-violet-500"/>
              Novo Hábito
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
