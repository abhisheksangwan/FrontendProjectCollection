import "./App.css";
import { Button, Card, Typography } from "@mui/material";
import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{ padding: 20, width: "500px", border: "2px solid black" }}
        >
          <Typography variant="h5">Welcome to the counter game</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const  count  = useRecoilValue(countState);
  return (
    <div>
      <Typography variant="h5" textAlign="center">
        {count}
        {console.log(count)}
      </Typography>
    </div>
  );
}

export default App;
const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
