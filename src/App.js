import './tailwind.output.css'
import ScalesGenerator from './components/ScalesGenerator'



function App() {
  return (
    <div className="flex flex-col font-sans p-10 container">
      <h1 className="text-gray-900 text-4xl font-bold">Scales Generator</h1>
      <ScalesGenerator />
    </div>
  );
}

export default App;
