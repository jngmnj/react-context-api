import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors_class";
import { ColorProvider } from './contexts/color'

function App() {
  return (
    // Provider를 사용할때는 value값을 꼭 명시해주어야 제대로 작동한다.
    <ColorProvider>
      <div style={{ padding: "24px" }}>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App
