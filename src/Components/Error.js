import React, { useState, useEffect } from "react";

const Question = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState([]);
  const [rank, setRank] = useState("");

  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/katas")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLanguageChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedLanguages = selectedOptions.map((option) => option.value);
    setLanguage(selectedLanguages);
  };

  const handleRankChange = (e) => {
    setRank(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      title: title,
      description: description,
      language: language,
      rank: rank,
    };
  
    fetch("http://localhost:3000/katas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuestion)
    })
      .then(response => response.json())
      .then(data => {
        setQuestions([...questions, data]);
        setTitle("");
        setDescription("");
        setRank("");
        setLanguage([]);
      })
      .catch(error => console.log(error));
  };
  

  return ( 
    <>
    <div className="flex">
      <div className="w-1/2 p-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {question.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {question.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="title"
            >
              Enter title of the question
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="description"
            >
              Enter description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="languages"
            >
              Select language
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="languages"
              multiple
              value={language}
              onChange={handleLanguageChange}
            >
                        <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="rank"
        >
          Select rank
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rank"
          value={rank}
          onChange={handleRankChange}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
    </div>
    <div>
        <form class="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="name">
      Name
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="slug">
      Slug
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="slug" type="text" placeholder="Enter slug"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="category">
      Category
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Enter category"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="languages">
      Languages
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="languages" type="text" placeholder="Enter languages"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="url">
      URL
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" type="text" placeholder="Enter URL"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="rank">
      Rank
    </label>
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rank" type="text" placeholder="Enter rank"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="description">
      Description
    </label>
    <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="4" placeholder="Enter description"></textarea>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="starter_code">
      Starter Code
    </label>
    <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="starter_code" rows="6" placeholder="Enter starter code"></textarea>
          </div>
          <div class="my-4">
  <label class="block font-bold mb-2" for="test1-input">Test 1 Input:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="test1-input" type="text" value='["Telescopes", "Glasses", "Eyes", "Monocles"]' readonly/>
</div>
<div class="my-4">
  <label class="block font-bold mb-2" for="test1-output">Test 1 Output:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="test1-output" type="text" value='["Eyes", "Glasses", "Monocles", "Telescopes"]' readonly/>
</div>

<div class="my-4">
  <label class="block font-bold mb-2" for="test2-input">Test 2 Input:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="test2-input" type="text" value='["a", "aa", "aaa"]' readonly/>
</div>
<div class="my-4">
  <label class="block font-bold mb-2" for="test2-output">Test 2 Output:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="test2-output" type="text" value='["a", "aa", "aaa"]' readonly/>
          </div>
          
{/* 
  console.log(kata.tests)
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

function validBraces(braces) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closeBraces = [')', '}', ']'];
  for (let i = 0; i < braces.length; i++) {
    if (openBraces.includes(braces[i])) {
      stack.push(braces[i]);
    } else if (closeBraces.includes(braces[i])) {
      const index = closeBraces.indexOf(braces[i]);
      if (stack.length === 0 || stack[stack.length - 1] !== openBraces[index]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

function runTests(kata, code) {
  try {
    const tests = kata?.tests;
    let codeWithSortByLength = '';
    if (kata?.slug === 'sort-array-by-string-length') {
      codeWithSortByLength = kata.starter_code + '\n' + code;
    } else if (kata.slug === 'valid-braces') {
      codeWithSortByLength = kata.starter_code.replace('function validBraces', 'function sortByLength') + '\n' + code;
    }
    const sortByLengthMatch = codeWithSortByLength.match(/function\s+sortByLength\s*\(\s*arr\s*\)\s*{\s*([\s\S]*)\s*}/);
    if (sortByLengthMatch) {
      const sortByLengthFn = sortByLengthMatch[0];
      eval(sortByLengthFn);
    }
    for (let i = 0; tests && i < tests.length; i++) {
      const test = tests[i];
      let expectedOutput = '';
      let actualOutput = '';
      if (kata?.slug === 'sort-array-by-string-length') {
        expectedOutput = JSON.stringify(test.output);
        actualOutput = JSON.stringify(sortByLength(test.input));
      } else if (kata?.slug === 'valid-braces') {
        expectedOutput = JSON.stringify(test.output);
        actualOutput = JSON.stringify(validBraces(test.input));
      }
      if (expectedOutput === actualOutput) {
        console.log(`Test ${i + 1} passed`);
      } else {
        console.log(`Test ${i + 1} failed`);
        console.log(`Expected output: ${expectedOutput}`);
        console.log(`Actual output: ${actualOutput}`);
      }
    }
  } catch (error) {
    console.error(error.toString());
  }
} */}

          </form>
    </div>
    </>
);
};

export default Question;
