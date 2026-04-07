/*
If I want to create the below structure with More then one siblings like h1&h2

<div id="parent">
    <div id="child">
        <h1> I am a h1 Tag</h1>
        <h2> I am a h2 Tag</h2>
    </div>
</div>


*/


const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
