import React from 'react'
import { AppBar } from 'material-ui'

const style = {
  backgroundColor: '#0086E3',
  position: 'fixed'
};

const Header = () => (
  <AppBar
    title="Redux Reaction"
    style={style}
    showMenuIconButton={false}
  />
)

export default Header
