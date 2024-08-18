
import './App.css'
import Card from './card/Card'
import List from './list/List';


function App() {
  const arry = ["name",25, "ten"];

  return (
    <>
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    {/* <List/> */}
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="blue" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="green" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    <Card n={arry}  color="red" h="250" w="500" title="Abdul korim" />
    </>
  )
}

export default App
