import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();
  const goToPage1 = () => {
    navigate('/');
  };

  return (
    <div className="App-header">
      <h1>Bem vindo a página 2</h1>
      <p>Gostaria de voltar para página 1?</p>
      <button onClick={goToPage1} type="button" name="voltar para pagina 1">Voltar para página 1</button>
    </div>
  )
}

export default Page2;
