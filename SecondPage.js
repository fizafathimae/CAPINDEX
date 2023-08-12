import React, { useState } from 'react';
import './SecondPage.css';

function SecondPage() {
  const taskList = [
    'PERSONAL HYGIENE',
    'BATHING SELF',
    'FEEDING',
    'TOILET',
    'STAIR CLIMBING',
    'DRESSING',
    'BOWEL CONTROL',
    'BLADDER CONTROL',
    'AMBULATION',
    'WHEELCHAIR',
    'CHAIR/BED TRANSFER'
  ];

  const scoringOptions = {
    'PERSONAL HYGIENE': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 1,
      'Moderate Help Required': 3,
      'Minimal Help Required': 4,
      'Fully Independent': 5,
    },
    'BATHING SELF': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 1,
      'Moderate Help Required': 3,
      'Minimal Help Required': 4,
      'Fully Independent': 5,
    },
    'FEEDING': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'TOILET': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'STAIR CLIMBING': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'DRESSING': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'BOWEL CONTROL': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'BLADDER CONTROL': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 2,
      'Moderate Help Required': 5,
      'Minimal Help Required': 8,
      'Fully Independent': 10,
    },
    'AMBULATION': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 3,
      'Moderate Help Required': 8,
      'Minimal Help Required': 12,
      'Fully Independent': 15,
    },
    'WHEELCHAIR': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 1,
      'Moderate Help Required': 3,
      'Minimal Help Required': 4,
      'Fully Independent': 5,
    },
    'CHAIR/BED TRANSFER': {
      'Unable To Perform Task': 0,
      'Substantial Help Required': 3,
      'Moderate Help Required': 8,
      'Minimal Help Required': 12,
      'Fully Independent': 15,
    }
  };

  const [selectedOptions, setSelectedOptions] = useState(
    taskList.reduce((acc, task) => ({ ...acc, [task]: '' }), {})
  );

  const [totalScore, setTotalScore] = useState(0);

  const handleOptionSelect = (task, option) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [task]: option,
    }));
  };

  const calculateTotalScore = () => {
    let score = 0;
    taskList.forEach(task => {
      const option = selectedOptions[task];
      if (option in scoringOptions[task]) {
        score += scoringOptions[task][option];
      }
    });
    setTotalScore(score);
  };

  const handleReload = () => {
    setSelectedOptions(
      taskList.reduce((acc, task) => ({ ...acc, [task]: '' }), {})
    );
    setTotalScore(0);
  };

  return (
    <div className="App">
      <header>
        <h1>Choose Yours</h1>
        <br></br>
        <br></br>
        <br></br>
      </header>
      <main>
        {taskList.map(task => (
          <div key={task} className="task-container">
            <h2>{task}</h2>
            <select
              value={selectedOptions[task]}
              onChange={e => handleOptionSelect(task, e.target.value)}
            >
              <option value="">Select an option</option>
              {Object.keys(scoringOptions[task]).map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className='button-container'>
        <button className="calculate-button" onClick={calculateTotalScore}>
          Calculate
        </button>
        {totalScore !== 0 && (
          <div>
            <br></br>
            <br></br>
            <br></br>
            <p className="total-score">Total Score: {totalScore}</p>
            {totalScore < 40 && <p>Unable to perform task</p>}
            {totalScore >= 40 && totalScore < 70 && (
              <p>Substantial help required</p>
            )}
            {totalScore >= 70 && totalScore < 90 && (
              <p>Moderate help required</p>
            )}
            {totalScore >= 90 && totalScore < 120 && (
              <p>Minimal help required</p>
            )}
            {totalScore >= 120 && <p>Fully dependent</p>}
          </div>
        )}
        <button className="reload-button" onClick={handleReload}>
          Reload
        </button>
        </div>
      </main>
    </div>
  );
}

export default SecondPage;