import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant.js";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  // useLoaderData :  Returns the loader data for the nearest ancestor Route loader
  // to get both page and data in one place.
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} id={pizza.id} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
