import '../styles/vars.css';
import '../styles/_nulling-styles.css';
import './App.css'
import { Main } from './pages/Main';
import { Authorization } from './pages/Authorization';
import { useAuthorizationContext } from './shared/contexts/authorizationContext';
import { Loader } from './entities/Loader';


function App() {
  const { isAuthorized, isLoading, isDone } = useAuthorizationContext();

  if (isLoading) {
    return <div className={"loading"}>
      <Loader isDone={isDone} imgSrc={"public/whatsapp-96.png"} imgAlt={"иконка WhatsApp"} />
    </div>
  }

  return (
    <>
      {isAuthorized ? <Main /> : <Authorization />}
    </>
  )
}

export default App
