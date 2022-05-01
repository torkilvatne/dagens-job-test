import React, { useState } from 'react';
import RadioButton from './FormElements/RadioButton';
import EditView from './EditView';
import SeeView from './SeeView';

/**
 * File improvements:
 * - More intuitive "view"-functionality (view-name mapping)
 * - Automated mapping of views
 */

const Content = () => {
  const [view, setView] = useState('see');
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
      <hr />
      {view === 'edit' && <EditView />}
      {view === 'see' && <SeeView />}
    </div>
  );
};

export default Content;
