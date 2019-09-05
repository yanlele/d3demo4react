import React, {FunctionComponent} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';

const SelectionAndDataComponent: FunctionComponent = () => {
  return (
    <div>
      <CodeMirror
        value="
const SelectionAndDataComponent: FunctionComponent = () => {
  return (
    <div>
      <CodeMirror
        value=''
        options={{
          mode: 'jsx',
          theme: 'monokai',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
        }}
      />
    </div>
  );
};"
        options={{
          mode: 'jsx',
          theme: 'monokai',
          lineNumbers: true,
          readOnly: true,
        }}
      />
    </div>
  );
};

export default SelectionAndDataComponent;
