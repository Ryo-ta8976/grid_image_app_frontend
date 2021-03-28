import React from 'react'
import Contents from './component/pages/Contents'
import { ToastProvider } from 'react-toast-notifications';

function App(): JSX.Element {
  return (
    <ToastProvider>
      <Contents />
    </ToastProvider>

  )
}

export default App
