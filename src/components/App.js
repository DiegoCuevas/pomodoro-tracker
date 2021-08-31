import Clock from "./clock/Clock.js"
function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/4 h-2/3 border rounded-2xl border-white p-10">
        <div className="text-xl font-bold text-center my-5">Pomodoro Tracker</div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
