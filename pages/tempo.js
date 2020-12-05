function Tempo(props) {
  console.log("Passando pelo front-end");
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <>
      <div>{dynamicDateString}(dinâmico)</div>
      <div>{props.staticDateString}(estático)</div>
    </>
  );
}

export function getStaticProps() {
  console.log("Passando pelo getStaticProps");
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
  };
}

export default Tempo;
