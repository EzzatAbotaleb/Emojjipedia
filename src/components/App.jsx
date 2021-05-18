import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojipedia){
  return(
  <Entry
  Key={emojipedia.id}
  name={emojipedia.name}
  meaning={emojipedia.meaning}
  emoji={emojipedia.emoji} 
  />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
