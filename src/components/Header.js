import React from 'react'
import AppBar from 'material-ui/AppBar'

const style = {
  backgroundColor: '#0086E3',
};

const Header = () => (
  <AppBar
    title="Redux Reaction"
    style={style}
    showMenuIconButton={false}
  />
)

export default Header
