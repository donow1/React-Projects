




//video 7 Displaying Data Dynamically
import React, { useState } from "react";

function AddItem(props) {

    const[productName,setProductName] = useState("");
    const[price,setPrice] = useState(0);
    const[type,setType] = useState("");
    const[brand,setBrand] = useState("");

    const addItemButtonPressed = ()=> {
        props.addItem({
          productName:productName, 
          price:price, 
          type:type, 
          brand:brand});

        setProductName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 gap-4">
            <h2 className="text-xl font-semibold">Add an Item</h2>
            <form className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
                <label form="name-field" className="">Name: <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="name-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="price-field" className="">Price: <input value={price} onChange={(e)=>setPrice(e.target.value)} id="price-field" type="number" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="type-field" className="">Type: <input value={type} onChange={(e)=>setType(e.target.value)} id="type-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="brand-field" className="">Brand: <input value={brand} onChange={(e)=>setBrand(e.target.value)} id="brand-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                
                <button onClick={addItemButtonPressed} type="button" className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4">Add Item</button>
            </form>   
        </div>
      );
}
export default AddItem;








// // 重新大致写一下 7 以后可以经常返回来看看

// import React, { useState } from 'react'

// export default function AddItem(props) {

//   const[name, setName] = useState("");
//   const[price, setPrice] = useState(0);

//   function pressBottonAddThings () {
//     props.addItem({name:name, price:price})
//   }

//   return (
//     <div>
//       <form>
//         <label for="user-input">Product Name: </label>
//         <input id='user-input' onChange={(e)=> setName(e.target.value)} value={name} />

//         <label for="user-input">Product Price: </label>
//         <input id='user-input' onChange={(e)=> setPrice(e.target.value)} value={price} />

//         <button type='button' onClick={pressBottonAddThings}>Add</button>
//       </form>

//     </div>
//   )
// }









// ////好吧，我重做一遍 7
// import React, { useState } from 'react'

// export default function AddItems(props) {

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [type, setType] = useState("");
//     const [brand, setBrand] = useState("");

//     // const searchButtonPressed = ()=>{
//     //     props.callback({data: "test 1"})
//     // }
//     const addItemPressed = ()=>{
//       props.addItems({name: name, price: price, type: type, brand: brand});
//       setName("");
//       setPrice(0);
//       setType("");
//       setBrand("");
//     };
    

//   return (
//     <div className='flex flex-col items-center justify-center py-8 gap-4'>
//         <h2>Add an Item</h2>
//         <form className='flex flex-col items-center justify-center py-8 gap-4'>
//             <label for="name-field">Name:  </label>
//             <input id="name-field" type='text'
//             onChange={(e)=>setName(e.target.value)}
//             value={name} />

//             <label for="price-field">Price:  </label>
//             <input id="price-field" type='text' 
//             onChange={(e)=>setPrice(e.target.value)}
//             value={price} />

//             <label for="type-field">Type:  </label>
//             <input id="type-field" type='text' 
//             onChange={(e)=>setType(e.target.value)}
//             value={type} />

//             <label for="brand-field">Brand:  </label>
//             <input id="brand-field" type='text' 
//             onChange={(e)=>setBrand(e.target.value)}
//             value={brand} />

//             <button 
//             type='button'
//             className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4"
//             onClick={addItemPressed}
//             >Add Items</button>
//         </form>

//         {/* this is to show how useState work. It have nothing to do with the button
//         <p>Display the name: {name}</p>
//         <p>Display the price: {price}</p>
//         <p>Display the type: {type}</p>
//         <p>Display the brand: {brand}</p> */}

//     </div>
//   );
// }






















////video 7 Displaying Data Dynamically
// import React, { useState } from "react";

// function AddItem(props) {

//     const[productName,setProductName] = useState("");
//     const[price,setPrice] = useState(0);
//     const[type,setType] = useState("");
//     const[brand,setBrand] = useState("");

//     const addItemButtonPressed = ()=> {
//         props.addItem({
//           productName:productName, 
//           price:price, 
//           type:type, 
//           brand:brand});

//         setProductName("");
//         setPrice(0);
//         setType("");
//         setBrand("");
//     };

//     return (
//         <div className="flex flex-col items-center justify-center py-8 gap-4">
//             <h2 className="text-xl font-semibold">Add an Item</h2>
//             <form className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
//                 <label form="name-field" className="">Name: <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="name-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="price-field" className="">Price: <input value={price} onChange={(e)=>setPrice(e.target.value)} id="price-field" type="number" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="type-field" className="">Type: <input value={type} onChange={(e)=>setType(e.target.value)} id="type-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="brand-field" className="">Brand: <input value={brand} onChange={(e)=>setBrand(e.target.value)} id="brand-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                
//                 <button onClick={addItemButtonPressed} type="button" className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4">Add Item</button>
//             </form>   
//         </div>
//       );
// }
// export default AddItem;


