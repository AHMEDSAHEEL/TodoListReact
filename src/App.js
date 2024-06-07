import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState ,useEffect} from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';

function App() {
  // const [name, setName] = useState("web developer")
  // const changeRole = () => {
  //   const arr = ["web Developer", "Software Developer", "programmer"];
  //   const num = Math.floor(Math.random() * 3);
  //   setName(arr[num]);
  // }
  // const click = () => {
  //   console.log("hello,thank you for clicking")
  // }

  // const number=[-2,-1,0,1,2];
  // const itemMap=number.map(n => ({numb : n})); 
  // const itemFilter=number.filter(n => n>0) // [1,2]
  // const itemMapFilt=number.filter(n => n>0).map(n =>({num : n}))
  // console.log(itemMapFilt); 

  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem('todo_list')))
    //[
    // {
    //   id: 1,
    //   checked: true,
    //   item: "practice coding"
    // },
    // {
    //   id: 2,
    //   checked: false,
    //   item: "learn React JS"
    // },
    // {
    //   id: 3,
    //   checked: true,
    //   item: "Intern Assessment"
    // }
  //]
//);
 
 // const API_URL='http://localhost:3500/itemss'
  const [newItem,setNewItem] = useState('');
  const [search,setSearch]=useState('')

// useEffect(()=>{ //u connot use async directly in annonoums func
//   const fetchItems=async()=>{
//     try{
//       const response= await fetch(API_URL)
//       console.log(response)
//       const listItems= await response.json();
//       console.log(listItems)
//       setItem(listItems)
//     }catch(err){
//    console.log(err.stack)
//     }
//   }
//   (async ()=> await fetchItems())()
// },[])

  const addItem = (item)=>{
    const id=items.length ? items[items.length-1].id+1: 1;
    const addNewItem={
      id,
      checked:false,
      item}
      const listItems=[...items,addNewItem];
      setItem(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const newList = items.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked } : item)
    setItem(newList);
    localStorage.setItem("todo_list", JSON.stringify(newList))
  }

  const deleteTODO = (id) => {
    const newList = items.filter((item) =>
      item.id != id)
    setItem(newList)
    localStorage.setItem("todo_list", JSON.stringify(newList))
    console.log("deleted")

  }

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted")
    addItem(newItem);
    setNewItem('')
   }


  return (
    <div className='main'>
      
      {<Header title="To Do List" />}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItems 
        search={search}
        setSearch={setSearch}
      />  
      <Content
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        deleteTODO={deleteTODO}

      />

      <Footer 
      length={items.length}
      />
    </div>
  );
}

export default App;
