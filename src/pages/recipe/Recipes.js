import { useParams} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme';





export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { error, isPending, data: recipe } = useFetch(url);
  const {mode} = useTheme()

  return (
    <div className={`recipes ${mode}`}>
      {error && <p>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {/* Check if recipe.ingredients exists before mapping */}
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            {/* Render recipe.method as HTML */}
            <p
              className='method'
              dangerouslySetInnerHTML={{ __html: recipe.method }}
            ></p>
          </ul>
        </>
      )}
    </div>
  );
}
  