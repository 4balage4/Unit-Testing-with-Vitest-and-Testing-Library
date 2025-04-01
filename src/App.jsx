import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Form from "./components/Form";
import RenderAPI from "./components/RenderAPI";
import UserProfile from "./components/UserProfile";
import Post from "./components/Post";
import ToBinary from "./components/ToBinary"

function App() {
  return (
    <>
      <Greeting name="Brian"/>
      <Counter />
      <Post />
      <Form />
      <RenderAPI />
      <UserProfile id="5" />
      <ToBinary/>
    </>
  );
}

export default App;
