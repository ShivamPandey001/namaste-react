# Namaste React 

BiteBoutique
/**
 * Header
 * - LOGO
 * - NavBar
 * Body
 * - Search
 * - RestarantContainer
 * - RestuarantCard
 *   - Img
 *   - Name of Restarant, Rating, Delivery time, cuisines
 * Footer
 * -CopyRight
 * -Links
 * -Address
 * -Contact
 */

 // Two types of export/imprort 
 - Default import/export

 export default <Component>
 import Component from "path"

 Named export/import

 export const Component
 import {Component} "path"

#finding the Path
 if no dependency array, which means useEffect will be called every render
 if there is empty dependency array -> useEffect will be called only once at the time of rendering i.e. when the component is called.

 #Finding the Path..

 # need to explore:-
  - OptionalChaining

  // if we wrap it with Header only, our header will only be able to see the updated value, else where the defaultValue will be there
  // return (
    
  //     <div className="app">
  //       <UserContext.Provider value ={{loggedInUser: userName}}>
  //       <Header />
  //       </UserContext.Provider>
  //       <Outlet />
  //     </div>
   
  // );