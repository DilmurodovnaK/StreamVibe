import React from 'react'
import Headerh from '../containers/Headerh'
import Card2 from '../components/Card2'
import { Accordion } from '@material-tailwind/react'
import Plan from '../components/Plan'
import Trial from '../components/Trial'
import Genre from '../components/Homee/Genre'
const Home = () => {
  return (
   <>
   <Headerh/>
   <Genre/>
   <Card2/>
   <Accordion/>
   <Plan/>
   <Trial/>
   </>
  )
}

export default Home