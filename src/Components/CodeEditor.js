import React, { useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";

const CodeEditor = () => {
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState("python");
	const languageMap = {
		python: languages.python,
		javascript: languages.javascript,
		ruby: languages.ruby,
		java: languages.java,
		c: languages.c,
	};
	const selectedLanguage = languageMap[language];
	let codeSnippet = "";
	if (language === "python") {
		codeSnippet = `# Write your Python code here\n`;
	} else if (language === "javascript") {
		codeSnippet = `// Write your JavaScript code here\n`;
	} else if (language === "ruby") {
		codeSnippet = `def add\nend\n`;
	} else if (language === "java") {
		codeSnippet = `// Write your Java code here\n`;
	} else if (language === "c") {
		codeSnippet = `// Write your C code here\n`;
	}

	const handleCodeChange = (newCode) => {
		setCode(newCode);
	};

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
		setCode("");
	};

	return (
		<div>
			<label>
				Choose a language:
				<select value={language} onChange={handleLanguageChange}>
					<option value='python'>Python</option>
					<option value='javascript'>JavaScript</option>
					<option value='ruby'>Ruby</option>
					<option value='java'>Java</option>
					<option value='c'>C</option>
				</select>
			</label>
			<SimpleCodeEditor
				value={code}
				onValueChange={handleCodeChange}
				highlight={(code) => highlight(code, selectedLanguage)}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 12,
					border: "1px solid #ccc",
					height:"300px",
				}}
			/>
			<pre>
				<code>{highlight(codeSnippet, selectedLanguage, language)}</code>
			</pre>
		</div>
	);
};

export default CodeEditor;
