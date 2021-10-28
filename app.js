const App = React.createElement;

const Display = () => {
  return (<p>hello elvis its all working out manze</p>;)
};

const domContainer = document.querySelector("#app");
ReactDOM.render(App(Display), domContainer);
