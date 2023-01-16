import useFetchGifs from '../hooks/useFetchGifs';
import GridItem from './GridItem';

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      
      {
        isLoading && ( <h2>Cargando ...</h2>)
      }

      <div className='card-grid'>
        {
          images.map( image => (
            <GridItem 
              key={ image.id }
              // title={ image.title }
              // url={ image.url }
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
