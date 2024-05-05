







//video 7 Displaying Data Dynamically
import React from 'react'

export default function ItemsDisplay({items, deleteItem}) {

  return (
    <div>
        {items.map((item)=>{
            return (
              <div className="flex flex-col items-center justify-center py-8 gap-4">
                    <div className='flex flex-col gap-2 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
                      <form className='border rounded-lg py-1.5 px-2 text-lg'>
                        <p>ID: {item.id}</p>
                        <p>Product Name: {item.productName}</p>
                        <p>Product Price: {item.price}</p>
                        <p>Product Type: {item.type}</p>
                        <p>Product Brand: {item.brand}</p>
                        <button onClick={()=> deleteItem(item)} type="button" className="bg-pink-300 text-white rounded-lg py-1 px-2 mt-4">Delete</button>
                      </form>
                  </div>
              </div>
                );
        })}
    </div>
  );
}







// // 重新大致写一下 7 以后可以经常返回来看看

//这段code 不能用， 因为 product 在这里是一个function  不是object 。 不具备 携带value
// import React from 'react'

// export default function ItemsDisplay(props) {
//     const product = (item) =>{
//         props.items.map(item)
//         return item
//     }


//   return (
//     <div>
//         <h1>The products you just added are </h1>
//         <p>Product: {product.name}</p>
//         <p>cost: {product.price}</p>
//     </div>
//   )
// }


////这段可以用的
// import React from 'react'

// export default function ItemsDisplay(props){ 

//   return (
//     <div>
//         {
//             props.items.map((item)=>{
//                 return(
//                     <div>
//                         <h2>Newly Added Products</h2>
//                         <p>Product: {item.name}</p>
//                         <p>Cost: {item.price}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }









{/* 
// //好吧，我重做一遍 7
// import React from 'react'

// export default function ItemsDisplay(props) {
//   return (
//     <div>
//         {props.items.map((item)=>{
//             return (
//                 <div>
//                     <p>ID: {item.id}</p>
//                     <p>Product Name: {item.productName}</p>
//                     <p>Product Price: {item.price}</p>
//                     <p>Product Type: {item.type}</p>
//                     <p>Product Brand: {item.brand}</p>
//                 </div>
//                 );
//         })}
//     </div>
//   );
// } */}

















////video 7 Displaying Data Dynamically
// import React from 'react'

// export default function ItemsDisplay(props) {
//   return (
//     <div>
//         {props.items.map((item)=>{
//             return (
//                 <div>
//                     <p>ID: {item.id}</p>
//                     <p>Product Name: {item.productName}</p>
//                     <p>Product Price: {item.price}</p>
//                     <p>Product Type: {item.type}</p>
//                     <p>Product Brand: {item.brand}</p>
//                 </div>
//                 );
//         })}
//     </div>
//   );
// }
