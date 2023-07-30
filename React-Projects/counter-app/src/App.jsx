import { useState } from "react";
import "./App.css";
import { Button, Card, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ padding: 20, width: "500", border:"2px solid black"}}>
        <Typography variant="h5">Welcome to the counter game</Typography>
        <br />
        <Buttons count={count} setCount={setCount} />
        <CountComponent count={count} />
      </Card>
    </div>
  );
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}
Buttons.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

function Increase({ count, setCount }) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}
Increase.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

function Decrease({ count, setCount }) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}
Decrease.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
function CountComponent({ count }) {
  return <div>
  <Typography variant="h5" textAlign={"center"}>{count} </Typography>
  </div>
}
CountComponent.propTypes = {
  count:PropTypes.number.isRequired,
}
export default App;
