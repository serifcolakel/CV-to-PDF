import "./App.css";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import { ComponentToPrint } from "./ComponentToPrint";
import Form from "./Form";

function App() {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button className="print">Print this out!</button>}
        content={() => componentRef.current}
      />
      <Form />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}

export default App;
