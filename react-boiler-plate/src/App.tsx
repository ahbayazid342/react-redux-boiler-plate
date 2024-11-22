import { useDispatch } from "react-redux";
import { useSelectorType } from "./hooks/useSelectorType";
import { ActionsUi } from "./app/store/slices/uiSlice";

const App = () => {
  const dispatch = useDispatch();
  const store = useSelectorType((state) => ({
    theme: state.ui.theme,
  }));

  const handleOnChange = () => {
    const theme = store.theme === "Dark" ? "Light" : "Dark";
    dispatch(ActionsUi.SetTheme(theme));
  };

  return (
    <>
      <h1>App Page Here</h1>
      <h1 className="text-3xl font-bold underline">{store.theme}!</h1>
      <div className="p-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOnChange}
        >
          Click Here
        </button>
      </div>
    </>
  );
};

export default App;
