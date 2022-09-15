interface PropsMeuParagrafo {
  texto: string;
}


  function MeuParagrafo (props: PropsMeuParagrafo) {
    return (
      <p>
      {props.texto}
      </p>
    )
  }
    

function App() {

    return (
      <>
      <h1>Este é o titulo do Componente</h1>
      <MeuParagrafo texto="Primeiro" />
      <MeuParagrafo texto="Segundo"/>
      <MeuParagrafo texto="Terceiro"/>
      </>
    )


}

export default App
