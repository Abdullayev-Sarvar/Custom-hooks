import { NavLink, useParams } from 'react-router-dom';
import { useRecipe } from '../../hooks/useRecipe';
import '../../components/loader/loader.css';

const Recipe = () => {
  const { id } = useParams();
  const { recipe, loading, error } = useRecipe(id);

  if (loading) return <div className='loader-wrapper'><div className="loader"></div></div>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className='w-full max-w-[1440px] h-full mx-auto my-5 px-1 py-6'>
      <div className='flex flex-col items-center'>
        {recipe && (
          <div className='w-full max-w-7xl'>
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl font-bold mb-4'>{recipe.name}</h1>
              <button className='py-3 px-8 text-white bg-sky-800 rounded-full hover:opacity-90 max-w-[250px]'>
                <NavLink to={`/`}>Go Back</NavLink>
              </button>
            </div>
            <div className='flex gap-8'>
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className='w-full max-w-96 h-auto rounded-2xl mb-4'
              />
              <div className='flex flex-col gap-2'>
                <p className='text-lg mb-4'>{recipe.description}</p>
                <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
                <p><strong>Meal Type:</strong> {recipe.mealType}</p>
                <ul className='flex flex-col gap-1'>
                  <li><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</li>
                  <li><strong>Instructions:</strong> {recipe.instructions.join('. ')}</li>
                  <li><strong>Calories:</strong> {recipe.caloriesPerServing}</li>
                  <li><strong>Cook Time:</strong> {recipe.prepTimeMinutes}</li>
                  <li><strong>Total Time:</strong> {recipe.cookTimeMinutes}</li>
                  <li><strong>Servings:</strong> {recipe.cuisine}</li>
                  <li><strong>Difficulty:</strong> {recipe.difficulty}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
