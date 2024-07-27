import React from 'react'
import Herosection from './subcomponents/Herosection'
import Recipes from './subcomponents/Recipes'

const Home = ({recipes}) => {
  return (
    <>
    <Herosection/>
    <Recipes recipes = {recipes}/>
    </>
  )
}

export default Home