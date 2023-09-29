import React from 'react';
import './controlPanel.css';
import { useSelector } from 'react-redux';
import { selectAllWinners } from '../../store/selectors';
const ControlPanel = () => {
  const currentGameUsers = useSelector(selectAllWinners);
  console.log(currentGameUsers);
  return (
    <section className='panel-section'>
      {Array.isArray(currentGameUsers) ? (
        <form  className='panel-form panel-section_panel-form'>
          {currentGameUsers.map((currentPair, index) => {
            return (
              <div key={`${index}_pare`} className='buttons panel-form__buttons'>
                <div className='radio-pare'>
                  <p className='text radio-pare__text'>{currentPair[0].name}</p>
                  <input
                    className='custom-radio buttons__custom-radio'
                    type='radio'
                    value={currentPair[0].name}
                    id={currentPair[0].name}
                    name={`${index}_pare`}
                  />
                  <label
                    className='custom-label buttons__custom-label'
                    htmlFor={currentPair[0].name}
                  ></label>
                </div>
                <div className='radio-pare'>
                  <p className='text radio-pare__text'>{currentPair[1].name}</p>
                  <input
                    value={currentPair[0].name}
                    className='custom-radio buttons__custom-radio'
                    type='radio'
                    id={currentPair[1].name}
                    name={`${index}_pare`}
                  />
                  <label
                    className='custom-label buttons__custom-label'
                    htmlFor={currentPair[1].name}
                  ></label>
                </div>
              </div>
            );
          })}
          <button className='button panel-form__button' type='sumbit'>Следующий раунд</button>
        </form>
      ) : (
        <div >finalist</div>
      )}
    </section>
  );
};

export default ControlPanel;
