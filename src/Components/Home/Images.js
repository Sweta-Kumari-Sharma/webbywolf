import React from 'react'
import Card from './Card'
import PuffLoader from 'react-spinners/PuffLoader'

const Images = ({data, loading}) => {
  return (
    <>
    {
      loading?
      <div className='flex justify-center items-center h-[80vh] w-[100vw] px-[50vw]'>
      <PuffLoader
      color={'red'}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
    </div>
    :
  
    <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 bg-white p-8'>
      {
                data.map(image => (
                    <div className=''>
                        <Card key={image.id} image={image} />
                    </div>
                ))
            }
    </div>
    }
    </>
  )
}

export default Images
