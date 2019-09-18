import React from 'react'

import styled from 'styled-components'

import ListItem from '../components/ListItem'


const List = ({ list}) => (
  <Wrapper>
    { 
        list.map(item => {
            return <ListItem key={item.id} item= {item} />
      })
    }
   

</Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default List