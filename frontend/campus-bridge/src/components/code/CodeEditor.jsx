import React, { useState } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';
import { saveAs } from 'file-saver';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const defaultCodes = {
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
  c: `#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    return 0;
}`,
  cpp: `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}`,
  python: `print("Hello, Python!")`,
};

const CodeEditor = () => {
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState(defaultCodes.java);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompile = async () => {
    setLoading(true);
    setOutput('');
    try {
      const res = await axios.post(`http://localhost:8080/compile2?lang=${language}`, code, {
        headers: { 'Content-Type': 'text/plain' },
      });
      setOutput(res.data);
    } catch (err) {
      console.error(err); // log the error details
      setOutput("Error connecting to backend.");
    }
    setLoading(false);
  };

  const handleSave = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `code.${language === 'python' ? 'py' : language}`);
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setCode(defaultCodes[selectedLang]);
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <select
          className="px-4 py-2 border border-gray-300 rounded shadow-sm dark:bg-gray-700 dark:text-white"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Save Code
        </button>
      </div>

      <AceEditor
        mode={language === 'python' ? 'python' : language === 'java' ? 'java' : 'c_cpp'}
        theme="monokai"
        name="codeEditor"
        fontSize={14}
        height="300px"
        width="100%"
        value={code}
        onChange={value => setCode(value)}
        editorProps={{ $blockScrolling: true }}
      />

      <button
        onClick={handleCompile}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        {loading ? "Compiling..." : "Run Code"}
      </button>

      <h2 className="mt-6 font-semibold text-lg text-gray-800 dark:text-gray-200">Output:</h2>
      <pre className="bg-black text-green-400 p-4 rounded mt-2 whitespace-pre-wrap h-48 overflow-auto">
        {loading ? "Compiling your code..." : output}
      </pre>
    </div>
  );
};

export default CodeEditor;
