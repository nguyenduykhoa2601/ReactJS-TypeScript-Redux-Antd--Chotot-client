import React from 'react'
import { useParams } from 'react-router-dom'
import { IParams, RootStore } from './utils/TypeScript'
import NotFound from './components/global/NotFound'
import { useSelector } from 'react-redux'

const generatePage = (name: string) => {
  const component = () => require(`./pages/${name}`).default

  try {
    return React.createElement(component())
  } catch (err) {
    return <NotFound />;
  }
}

const PageRender = () => {
  const {auth} = useSelector((state:RootStore)=>state)
  let { page, slug }: IParams = useParams()

  let name = '';
  if(!auth.access_token){
    if(page ==='profile'){
      page = 'login'
    }
  }
  if(auth.access_token){
    if(page === 'login') page = ''
    if(page === 'register') page = ''
  }
  if(page){
    name = slug ? `${page}/[slug]` : `${page}`
  }

  return generatePage(name)
}

export default PageRender