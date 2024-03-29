/**
 * /pantry page, where a user can see the ingredients available to them.
 * 
 * Note: must add a route which deals primarily with importing data on
 * ingredients and inventory.
 */
import Navigation, { DefaultNavigationLinks } from '../../components/Navigation';
import Head from 'next/head';



export default function Inventory() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <>
      <Head>
        <title>Sous | Pantry</title>
        <meta name="description" content="" />
        <link rel="icon" href="/sous-notext.svg" />
      </Head>
      <Navigation sticky={ true } links={ DefaultNavigationLinks } />
      <h1>Welcome to your inventory</h1>
      <p>This is a place where you can update your kitchen inventory.</p>
      <p>Select an ingredient to edit it's quantity.</p>


      <button onClick={() => handleClick()}>First time here? Here's a short tutorial!</button>
    </>
  );
}