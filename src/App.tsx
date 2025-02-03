import '../styles/vars.css';
import '../styles/_nulling-styles.css';
import './App.css'
import { Main } from './pages/Main';
import { Authorization } from './pages/Authorization';
import { useAuthorizationContext } from './shared/contexts/authorizationContext';


function App() {
  const { isAuthorized, isLoading } = useAuthorizationContext();

  if (isLoading) {
    return <div className={"loading"}>Loading...</div>
  }

  return (
    <>
      {isAuthorized ? <Main /> : <Authorization />}
    </>
  )
}

export default App
