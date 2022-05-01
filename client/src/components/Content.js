import React, { useState } from 'react';
import RadioButton from './FormElements/RadioButton';
import AddView from './AddView';
import SeeView from './SeeView';
import FindFamiliarView from './FindFamiliarView';

/**
 * File improvements:
 * - More intuitive "view"-functionality (view-name mapping)
 * - Automated mapping of views
 */

const Content = () => {
  const [view, setView] = useState('add');
  const handleOnRadioButtonChange = (e) => {
    setView(e.target.id);
  };

  return (
    <div>
      <RadioButton
        id={'add'}
        checked={view === 'add'}
        name={'Add products'}
        onChange={handleOnRadioButtonChange}
      />
      <br />
      <RadioButton
        id={'see'}
        checked={view === 'see'}
        name={'See products'}
        onChange={handleOnRadioButtonChange}
      />
      <br />
      <RadioButton
        id={'findFamiliar'}
        checked={view === 'findFamiliar'}
        name={'Find familiar products'}
        onChange={handleOnRadioButtonChange}
      />
      <hr />
      {view === 'add' && <AddView />}
      {view === 'see' && <SeeView />}
      {view === 'see' && <FindFamiliarView />}
    </div>
  );
};

export default Content;
