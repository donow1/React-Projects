





//video 7 Displaying Data Dynamically
import React, { useState, useEffect } from "react";
import SearchBar from "./BComponent";
import AddItem from "./CComponent";
import ItemsDisplay from "./DComponent";
// import { response } from "express";
// import Test from "./EClass";

function App() {
  
  const[filters, setFilters] = useState({});
  const[data, setData] = useState({items: []});
  // const[showTest, setShowTest] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response)=> response.json())
    .then((data) => setData({items:data}));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };




  const deleteItem = (item)=> {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response)=> {
        if (response.ok){
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({items: items});
        }
      }
    )
  }

//   const deleteItem = (itemToDelete) => {
//     const requestOptions = {
//         method: "DELETE"
//     };
//     fetch(`http://localhost:3000/items/${itemToDelete.id}`, requestOptions)
//         .then((response) => {
//             if (response.ok) {
//                 const updatedItems = data.items.filter(item => item.id !== itemToDelete.id);
//                 setData({ items: updatedItems });
//             }
//         });
// };










  const addItemToData = (item)=>{
    let items = data["items"];
    // item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response)=> response.json())
      .then((data)=> {
        items.push(data);
        setData({items:items});
      });
  };



  const filterData = (data)=>{

    const filteredData = [];

    if(!filters.name){
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      if (filters.price !== 0 && item.price !== filters.price) {
        continue;
      }

      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center px-12"> 
        <SearchBar updateSearchParams={updateFilters} />
        <AddItem addItem={addItemToData} />
      </div>

      <div className="flex flex-col items-center justify-center px-12"> 
        <ItemsDisplay deleteItem={deleteItem} items={filterData(data["items"])} />
      </div>

      {/* <div className="flex flex-col items-center justify-center px-12"> 
        {showTest? <Test destroy={setShowTest} /> : null}
      </div> */}

    </div>


  );
}

export default App;







// // 重新大致写一下 7 以后可以经常返回来看看
// import React, {useState} from 'react'
// // import SearchBar from './BComponent';
// import AddItem from './CComponent';
// import ItemsDisplay from './DComponent';


// export default function App() {


//   const[data, setData] = useState({items:[]})

//   const addData = (receievedParams)=>{
//     let items = data["items"];
//     items.push(receievedParams)
//     setData({items:items})
//     console.log(data)
//   }


//   return (
//     <div>
//       {/* <SearchBar showItem={updateData} /> */}
//       <AddItem addItem={addData} />
//       <ItemsDisplay items={data["items"]} />
//     </div>
//   )
// }




// //好吧，我重做一遍 7

// import React, {useState} from 'react';
// import SearchBar from './BComponent';
// import AddItems from './CComponent';
// import ItemsDisplay from './DComponent';


// export default function App() {
//   //to get the params from child component 
//   // for search
//   const [filters, setFilters] = useState({});

//   // ========== for add item  ==== the data is an array
//   const [data, setData] = useState({items:[]})

//   // for search
//   const updateFilters = (searchParams)=> {
//     setFilters(searchParams)
//   };

//   // =========== for add items
//   const addItemsToData = (item)=>{
//     let items = data["items"];
//     item.id = items.length;
//     items.push(item);
//     setData({items: items});
//   };

//   return (
//     <div className='flex flex-col items-center justify-center'>
//       <SearchBar updateSearchPrams={updateFilters} />
//       <AddItems addItems={addItemsToData}/>
//       <ItemsDisplay items={data["items"]} />
//     </div>
//   );
// }














// ////好吧，我重做一遍 6

// import React, {useState} from 'react';
// import SearchBar from './BComponent';


// export default function App() {

//   const [data, setData] = useState({});

//   const updateData = (searchParams)=> {
//     setData(searchParams)
//   };


//   return (
//     <div className='flex flex-col items-center justify-center'>
//       <SearchBar callback={updateData} />
//       <p>Click the Search button, you will see the product name: {"name" in data ? data["name"] : "No data to display"}</p>
//       <p>Click the Search button, you will see the product price: {"price" in data ? data["price"] : "No data to display"}</p>
//       <p>Click the Search button, you will see the product type: {"type" in data ? data["type"] : "No data to display"}</p>
//       <p>Click the Search button, you will see the product brand: {"brand" in data ? data["brand"] : "No data to display"}</p>
//     </div>
//   )
// }



// // Purrrfect Tuna      100     Food      Meow's



////video 7 Displaying Data Dynamically
// import React, { useState } from "react";
// // import {PropTypes} from "prop-types";
// // import SearchBar from "./BComponent";
// import AddItem from "./CComponent";
// import ItemsDisplay from "./DComponent";

// function App() {
  
//   // const[filters, setFilters] = useState({});
//   const[data, setData] = useState({items: []});

//   // const updateFilters = (searchParams) => {
//   //   setFilters(searchParams);
//   // };

//   //set the state when there is a list in it
//   //1 store the items[] array in let items  2 add item to the let  3 reset it in setData
  
//   const addItemToData = (item)=>{
//     let items = data["items"];
//     item.id = items.length;
//     items.push(item);
//     setData({items:items});
//     console.log(data)
//   };

//   return (
//     <div className="flex flex-col items-center justify-center px-12"> 
//       {/* <SearchBar updateSearchParams={updateFilters} /> */}
//       <ItemsDisplay items={data["items"]} />
//       <AddItem addItem={addItemToData} />

//     </div>
//   );
// }

// export default App;




//video 6==== form
// import React, { useState } from "react";
// import {PropTypes} from "prop-types";
// import SearchBar from "./BComponent";
// // import CComponent from "./CComponent";



// function App() {

//   const[data, setData] = useState({})

//   const updateData = (searchParams) => {
//     setData(searchParams);
//   };


//   return (
//     <div className="flex flex-col items-center justify-center px-12"> 
//       <SearchBar callback={updateData} />
//       <p>Product Name: {"productName" in data ? data["productName"] : "No data to display."}</p>
//       <p>Max Price: {"price" in data ? data["price"] : "No data to display."}</p>
//       <p>Type: {"type" in data ? data["type"] : "No data to display."}</p>
//       <p>Brand: {"brand" in data ? data["brand"] : "No data to display."}</p>
//     </div>
//   );
// }

// export default App;

