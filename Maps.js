import React from 'react';
import styled from 'styled-components';


const Outer = styled.div`
overflow-y:hidden;
margin-bottom:-500px;
`
const Map = () => {
  return (
    <Outer>
      <iframe src="https://my.atlist.com/map/0e491a62-8103-4a44-ab38-4732607d2f06?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="625px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
    </Outer>
  )
}

export default Map
