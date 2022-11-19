/**
 * /pantry page, where a user can see the ingredients available to them.
 * 
 * Note: must add a route which deals primarily with importing data on
 * ingredients and inventory.
 */
import Head from 'next/head';

export default function Inventory() {
  function handleClick(e: Event) {
    console.log("button clicked", e);
  }
  return (
    <>
      <h1>Welcome to your inventory</h1>
      <p>This is a place where you can update your kitchen inventory.</p>
      <p>Select an ingredient to edit it's quantity.</p>


      <button>First time here? Here's a short tutorial!</button>
    </>
  );
}