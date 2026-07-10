import Ujjwal from "./ujjwal.jsx";
function App() {

  // if i have a varibale how can i inject to the return ke ander html me 
  const username = 'Ujjwal Singh'
  return (
    <>
      <Ujjwal />
      <h4>hello react vite {username}</h4>
    </>
  );
}

export default App;
