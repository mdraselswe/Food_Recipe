import React from 'react'

import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap'

import './ImageCard.css'

const ImageCard = ({ recipe }) => {
  const { image_url, title } = recipe
  return (
    <Card className='recipe__card'>
      <CardImg width='100%' src={image_url} alt='Card image cap' />
      <CardImgOverlay>
        <CardTitle className='recipe__title'>{title}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

export default ImageCard
