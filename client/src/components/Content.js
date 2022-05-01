import React, { useState } from 'react';
import RadioButton from './FormElements/RadioButton';
import EditView from './Edit/EditView';
import SeeView from './See/SeeView';

/**
 * File improvements:
 * - More intuitive "view"-functionality (view-name mapping)
 * - Automated mapping of views
 */

const Content = () => {
  const [view, setView] = useState('edit');
  const handleOnRadioButtonChange = (e) => {
    setView(e.target.id);
  };

  return (
    <div>
      <RadioButton
        id={'edit'}
        checked={view === 'edit'}
        name={'Edit products'}
        onChange={handleOnRadioButtonChange}
      />
      <br />
      <RadioButton
        id={'see'}
        checked={view === 'see'}
        name={'See products'}
        onChange={handleOnRadioButtonChange}
      />
      {view === 'edit' && <EditView />}
      {view === 'see' && <SeeView />}
    </div>
  );
};

export default Content;
