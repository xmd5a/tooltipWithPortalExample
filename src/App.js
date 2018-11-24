import React, { Component } from 'react';
import './App.css';
import TooltipWrapper from './components/Tooltip/TooltipWrapper';
import ButtonStateless from './components/ButtonStateless/ButtonStateless';
import ButtonClass from './components/ButtonClass/ButtonClass';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="wrapper">
          <TooltipWrapper content="some tooltip content">
            <li>
              li with <a href="">link Node trigger</a>
            </li>
          </TooltipWrapper>
        </div>

        <div className="wrapper">
          <TooltipWrapper content="some content">
            <ButtonStateless>ComponentFunctional trigger</ButtonStateless>
          </TooltipWrapper>
        </div>

        <div className="wrapper">
          <TooltipWrapper content="some content">
            <a href="">Node trigger</a>
          </TooltipWrapper>
        </div>

        <div className="wrapper">
          <TooltipWrapper content="some content">
            <ButtonClass>ComponentClass trigger</ButtonClass>
          </TooltipWrapper>
        </div>

      </div>
    );
  }
}

export default App;
