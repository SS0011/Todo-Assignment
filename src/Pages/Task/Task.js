import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Buttons from '../../Atoms/Button/Button';
import Style from './Task.module.css'


export default function App() {
  const friends = [
    {
      id: 1,
      name: 'Sleep',
      isUpdate: false
    },
    {
      id: 2,
      name: 'Study',
      isUpdate: false
    },
    {
      id: 3,
      name: 'run',
      isUpdate: false
    },
    {
      id: 4,
      name: 'play',
      isUpdate: false
    },
  ];

  const [list, setList] = useState(friends);
  const [isDisable, setIsDisable] = useState(false);
  const [value, setValue] = useState("");
  const [addItem, setAddItem] = useState("");
  //for making conditional rendering


  function handleUpdate(x) {
    x.isUpdate = true
    setList([...list])
    setIsDisable(true)
  }

  //=================================================//
  //For creating item //CREATE

  function addItems(addItem) {
    if(!addItem){
      alert("please add item")
    }else{
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      name: addItem,
      isUpdate: false
    }
    setList([newItem, ...list])
    setAddItem("")
  }
  }

  //================================================//

  //For DELETING items //DELETE

  function handleDelete(x) {
    const newlist = list.filter((element) => element.id !== x.id)
    setList(newlist);
  }

  //================================================//

  //for update done mean editing value //UPDATE
  function handleUpdateDone(x, value) {
    if (value === "") {
      alert("please edit or cancel")
    } else {


      let index = list.indexOf(x)
      const updateValue = {
        name: value
      }
      list.splice(index, 1, updateValue)
      setList([...list])
      setValue("")
      setIsDisable(false)
    }
  }
  //======================================================//

  //for Editing cancel //CANCEL
  function handleCancelUpdate(x) {
    x.isUpdate = false
    setList([...list])
    setIsDisable(false)
  }

  //==================================================//
  return (<>
     <Navbar/>
    <div className={Style.Main} >
      <div className={Style.Add}>
        <input value={addItem} onChange={(e) => setAddItem(e.target.value)}  className={Style.Input}/>

        <Buttons buttonText= '+' onClick={() => addItems(addItem)} className={Style.AddItem}  />
      </div>
      {list.map((x) => (
     
          <div
            key={x.id}
            className={Style.Task}
          >

            
              {x.isUpdate ?
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                :
                <h3>{x.name}</h3>
              }
              
            <div className={Style.Button}>
              <button onClick={() => handleDelete(x)} className={Style.Delete}>Delete</button>&nbsp;
              {!x.isUpdate ?
                <button className={Style.update} disabled={isDisable} onClick={() => handleUpdate(x, value)}>update</button>
               
                :
                <>
                  <button className={Style.update} onClick={() => handleUpdateDone(x, value)}>update done</button>&nbsp;
                  <button className={Style.Delete} onClick={() => handleCancelUpdate(x)}>Cancel</button>
                </>
              }
               </div>
          </div>
      ))}
    </div>
 </>
  );
}
