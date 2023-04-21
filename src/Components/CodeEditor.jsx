import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/rails/rails';

function CodeEditor(props) {
  const { language, code, onBeforeChange } = props;

  return (
    <div className="h-full">
      <CodeMirror
        className="h-full"
        value={code}
        options={{
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          onBeforeChange(value);
        }}
      />
    </div>
  );
}

export default CodeEditor;
