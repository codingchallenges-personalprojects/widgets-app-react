import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
  {
    label: "The Shade Of Green",
    value: "Green",
  },
];

const items = [
  {
    title: "whats react?",
    content: "react is a front-end js framework.",
  },

  {
    title: "why use react?",
    content: "react is a js favorite library amongst engineers.",
  },

  {
    title: "how do you use react?",
    content: "you use react by creating components.",
  },
];

export default () => {
  const[selected , setSelected] = useState(options[0]);
  return (
    
    <div>
    <Header/>
    <Route  path= '/'>
    <Accordion items= {items}/>
    </Route>

    <Route  path= '/list'>
    <Search />
    </Route>

    <Route  path= '/dropdown'>
    <Dropdown 
    label='select a color'
    options= {options}
    selected= {selected}
    onSelectedChange = {setSelected}
    />
    </Route>

    <Route  path= '/translate'>
    <Translate />
    </Route>

</div>
  );
};




