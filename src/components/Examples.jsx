import React, {useState} from 'react';
import {EXAMPLES} from '../data.js';
import TabButton from './TabButton.jsx';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState('components');

    // let tabContent = "Please click a button"
  
    function handleSelect (selectedButton) {
      // select button is clicked as a value:  a components ,jsx, props, state
      setSelectedTopic(selectedButton);
    }  
    return (
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelect={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelect={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelect={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelect={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>

          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) }
        </section>

    )
}