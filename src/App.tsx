import React from 'react'
import logo from './logo.svg'
import './App.style.tsx'
import { Button, Container } from '@mui/material'
import { useStyles } from './App.style'
import { Header } from 'views/app/header/header'

function App() {
  const { classes } = useStyles({ color: 'red' })
  return <Header />
}

export default App
