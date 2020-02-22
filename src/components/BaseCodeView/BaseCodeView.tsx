import React, {FunctionComponent, useEffect, useState} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import './index.css';

interface BaseCodeViewProps {
  name: string | string[];
  apiPrefix: string;
}

const BaseCodeView: FunctionComponent<BaseCodeViewProps> = (props) => {
  const {name, apiPrefix} = props;
  const [code, updateCode] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log(`/api/${apiPrefix}-${name}/`);
      const response = await axios.get(`/api/${apiPrefix}-${name}/`);
      updateCode(response.data.code);
    };
    fetchData();
  }, []);

  return (

    <div className="code-mirror-container">
      <CodeMirror
        value={code}
        options={{
          mode: 'jsx',
          theme: 'monokai',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default BaseCodeView;
