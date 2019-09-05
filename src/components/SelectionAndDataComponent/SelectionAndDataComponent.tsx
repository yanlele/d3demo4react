import React, {FunctionComponent, useEffect, useState} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import './index.css';

const SelectionAndDataComponent: FunctionComponent = () => {
  const [code, updateCode] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const axiosResponse = await axios.get('/api/code');
      updateCode(axiosResponse.data.code);
    };
    fetchData();
  });

  return (
    <div className="container">
      <CodeMirror
        value={code}
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
