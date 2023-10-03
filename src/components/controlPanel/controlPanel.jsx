import React, { useState } from 'react';
import './controlPanel.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllWinners } from '../../store/selectors';
import { addWiners } from '../../features/allUsers';
const ControlPanel = () => {
  const currentGameUsers = useSelector(selectAllWinners);
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState([]);
  const handleChange = (event) => {
    setSelectedValues(selectedValues.concat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addWiners(selectedValues));
    setSelectedValues([]);
    const radioButtons = document.querySelectorAll('input[type=radio]');
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
  };

  return (
    <section className='panel-section'>
      {Array.isArray(currentGameUsers) ? (
        <form
          onSubmit={handleSubmit}
          className='form panel-section_form'
        >
          {currentGameUsers.map((currentPair, index) => {
            return (
              <div
                key={`${index}_pare`}
                className='buttons form__buttons'
              >
                <div className='radio-pare'>
                  <p className='text radio-pare__text'>{currentPair[0].name}</p>
                  <input
                    className='custom-radio buttons__custom-radio'
                    type='radio'
                    value={currentPair[0].name}
                    id={currentPair[0].name}
                    name={`${index}_pare`}
                    required
                    onChange={(event) => handleChange(event, index)}
                  />
                  <label
                    className='custom-label buttons__custom-label'
                    htmlFor={currentPair[0].name}
                  ></label>
                </div>
                <div className='radio-pare'>
                  <p className='text radio-pare__text'>{currentPair[1].name}</p>
                  <input
                    value={currentPair[1].name}
                    className='custom-radio buttons__custom-radio'
                    type='radio'
                    id={currentPair[1].name}
                    name={`${index}_pare`}
                    required
                    onChange={(event) => handleChange(event, index)}
                  />
                  <label
                    className='custom-label buttons__custom-label'
                    htmlFor={currentPair[1].name}
                  ></label>
                </div>
              </div>
            );
          })}
          <button className='button form__button' type='sumbit'>
            Следующий раунд
          </button>
        </form>
      ) : (
        <div className='winner'>
          <div className='frame winner_frame'>
            <p className='text frame_text'>Поздравлем!</p>
            <h2 className='title frame_title'>
              Победил игрок {currentGameUsers.name}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default ControlPanel;
