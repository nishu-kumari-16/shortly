import "./App.css";
import StepForm from "./components/StepForm";
// import Layout from "./components/layout";
import StackVisualizer from "./components/stack-visualizer";
import TagInput from "./components/tag-input";
import URLShortener from "./components/url-shortener";

function App() {
  return (
    <div className="clone-app">
      {/* <Layout /> */}
      {/* <StackVisualizer /> */}
      {/* <TagInput /> */}
      {/* <StepForm /> */}
      <URLShortener />
    </div>
  );
}

export default App;
