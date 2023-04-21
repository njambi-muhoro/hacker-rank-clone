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
);
};

export default Question;
