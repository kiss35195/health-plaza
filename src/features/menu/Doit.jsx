import { useRouteLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import Loader from "../../components/Loader";

function Doit() {
  const recipes = useRouteLoaderData("recipes-data");
  if (!recipes) return <Loader />;

  return (
    <ul className="w-full gap-4 divide-y divide-lime-700 p-4 md:grid md:grid-cols-3 md:divide-y-0 md:px-20">
      {recipes?.map((recipe) => (
        <MenuItem key={recipe.id} recipe={recipe} page="doit" />
      ))}
    </ul>
  );
}

export default Doit;
