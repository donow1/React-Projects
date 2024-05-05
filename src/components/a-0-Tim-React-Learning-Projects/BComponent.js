





//video 7 Displaying Data Dynamically
import React, { useState } from "react";

function SearchBar(props) {

    const[productName,setProductName] = useState("");
    const[price,setPrice] = useState(0);
    const[type,setType] = useState("");
    const[brand,setBrand] = useState("");


    const pressButtonSearch = ()=> {
        props.updateSearchParams({
            productName:productName, 
            price:price, 
            type:type, 
            brand:brand});
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 gap-4">
            <h2 className="text-xl font-semibold">Search an Item</h2>
            <form className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
                <label form="name-field" className="">Name: <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="name-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="price-field" className="">Max Price: <input value={price} onChange={(e)=>setPrice(e.target.value)} id="price-field" type="number" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="type-field" className="">Type: <input value={type} onChange={(e)=>setType(e.target.value)} id="type-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

                <label form="brand-field" className="">Brand: <input value={brand} onChange={(e)=>setBrand(e.target.value)} id="brand-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                
                <button onClick={pressButtonSearch} type="button" className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4">Search Item</button>
            </form>   
        </div>
      );
}
export default SearchBar;








// // 重新大致写一下 7
// import React, { useState } from 'react'

// export default function SearchBar(props) {

//   const[name, setName] = useState("");
//   const[price, setPrice] = useState(0);

//   function pressBottonShowThings () {
//     props.showItem({name:name, price:price})
//   }

//   return (
//     <div>
//       <form>
//         <label for="user-input">Product Name: </label>
//         <input id='user-input' onChange={(e)=> setName(e.target.value)} value={name} />

//         <label for="user-input">Product Price: </label>
//         <input id='user-input' onChange={(e)=> setPrice(e.target.value)} value={price} />

//         <button type='button' onClick={pressBottonShowThings}>Search</button>
//       </form>

//     </div>
//   )
// }











// //好吧，我重做一遍 7
// import React, { useState } from 'react'

// export default function SearchBar(props) {

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [type, setType] = useState("");
//     const [brand, setBrand] = useState("");

//     // const searchButtonPressed = ()=>{
//     //     props.callback({data: "test 1"})
//     // }
//     const searchButtonPressed = ()=>{
//       props.updateSearchPrams({name: name, price: price, type: type, brand: brand});
//     };
    

//   return (
//     <div className='flex flex-col items-center justify-center py-8 gap-4'>
//         <h2>Search for an Item</h2>
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
//             onClick={searchButtonPressed}
//             >Search</button>
//         </form>

//         {/* this is to show how useState work. It have nothing to do with the button
//         <p>Display the name: {name}</p>
//         <p>Display the price: {price}</p>
//         <p>Display the type: {type}</p>
//         <p>Display the brand: {brand}</p> */}

//     </div>
//   );
// }
















// ////好吧，我重做一遍 6
// import React, { useState } from 'react'

// export default function SearchBar(props) {

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [type, setType] = useState("");
//     const [brand, setBrand] = useState("");

//     // const searchButtonPressed = ()=>{
//     //     props.callback({data: "test 1"})
//     // }
//     const searchButtonPressed = ()=>{
//       props.callback({name: name, price: price, type: type, brand: brand});
//     };
    

//   return (
//     <div className='flex flex-col items-center justify-center py-8 gap-4'>
//         <h2>Search for an Item</h2>
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
//             onClick={searchButtonPressed}
//             >Search</button>
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

// function SearchBar(props) {

//     const[productName,setProductName] = useState("");
//     const[price,setPrice] = useState(0);
//     const[type,setType] = useState("");
//     const[brand,setBrand] = useState("");


//     const pressButtonWillShow = ()=> {
//         props.updateSearchParams({productName:productName, price:price, type:type, brand:brand})
//     };

//     return (
//         <div className="flex flex-col items-center justify-center py-8 gap-4">
//             <h2 className="text-xl font-semibold">Add an Item</h2>
//             <form className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
//                 <label form="name-field" className="">Name: <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="name-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="price-field" className="">Max Price: <input value={price} onChange={(e)=>setPrice(e.target.value)} id="price-field" type="number" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="type-field" className="">Type: <input value={type} onChange={(e)=>setType(e.target.value)} id="type-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="brand-field" className="">Brand: <input value={brand} onChange={(e)=>setBrand(e.target.value)} id="brand-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                
//                 <button onClick={pressButtonWillShow} type="button" className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4">Show Item Below</button>
//             </form>   
//         </div>
//       );
// }
// export default SearchBar;





//// lesson 6=== form
// import React, { useState } from "react";
// function SearchBar(props) {
//     const[productName,setProductName] = useState("");
//     const[price,setPrice] = useState(0);
//     const[type,setType] = useState("");
//     const[brand,setBrand] = useState("");

//     const pressButtonWillShow = ()=> {
//         props.callback({productName:productName, price:price, type:type, brand:brand})
//     };

//     return (
//         <div className="flex flex-col items-center justify-center py-8 gap-4">
//             <h2 className="text-xl font-semibold">Add an Item</h2>
//             <form className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
//                 <label form="name-field" className="">Name: <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="name-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="price-field" className="">Max Price: <input value={price} onChange={(e)=>setPrice(e.target.value)} id="price-field" type="number" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="type-field" className="">Type: <input value={type} onChange={(e)=>setType(e.target.value)} id="type-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                

//                 <label form="brand-field" className="">Brand: <input value={brand} onChange={(e)=>setBrand(e.target.value)} id="brand-field" type="text" className="border rounded-lg py-1.5 px-2 text-lg"></input></label>
                
//                 <button onClick={pressButtonWillShow} type="button" className="bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4">Show Item Below</button>
//             </form>   
//         </div>
//       );
// }
// export default SearchBar;









// import React, { useState } from "react";

// class Info extends React.Component {

// //step 3 set the initiative nap count and make sure "this " will be applicable for the buttonPressed function
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,  
//     };
//     this.buittonPressed = this.buittonPressed.bind(this);
//   }


// //step 2  the button function will do sth once clicked
// buittonPressed(){
//   this.setState({
//     count:this.state.count+1,
//   });
// }

// //step 1 set the "formula", and the functions names
//   render() {
//     const title = this.props.title;
    
//       return (
//         <div>
//           <h1>{title}</h1>
//           <p>Naps Count: {this.state.count}</p>
//           <button onClick={this.buittonPressed}>Update Naps!</button>
//         </div>
//       );
   
// }
// }


// export default Info;






// import React, { useState } from "react";

// const Info = ()=>{


//     return (
//         <div> 
    
//         </div>
//       );
// }
// export default Info;

// import React, { useState } from "react";

// class Info extends React.Component {

//   constructor(props) {
//     super(props)
//   }


//   render() {
//     const title = this.props.title;
//     const showTitle = true;

//     if (showTitle) {
//       return (
//         <div>
//           <h1>{title}</h1>
//           <p>Manage your stuff</p>
//         </div>
//       );
//     }else {
//       return <p>empty</p>
//     }
//   }
// }

// Info.defaultProps = {
//   number:2,
//   title:"Must Use Title",
// };




