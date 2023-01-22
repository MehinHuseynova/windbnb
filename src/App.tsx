import ExpandableSearchProvider from 'contexts/ExpandleSearchContext'
import { AppLayout } from 'views/app/layout/appLayout'
import './App.style.tsx'

function App() {
  return (
    <ExpandableSearchProvider>
      <AppLayout />
    </ExpandableSearchProvider>
  )
}

export default App
