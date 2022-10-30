import React, { useState } from 'react';
import QandA from '../../components/QandA/QandA';
import './useDialog.css';

type DialogProps = {
  gakumonId: string;
};

type UseDialog = () => {
  Dialog: React.FC<DialogProps>;
  openDialog: VoidFunction;
  closeDialog: VoidFunction;
};

const useDialog: UseDialog = () => {
  const [isOpen, setOpen] = useState(false);

  const openDialog: VoidFunction = () => {
    setOpen(true);
  };

  const closeDialog: VoidFunction = () => {
    setOpen(false);
  };

  const Dialog: React.FC<DialogProps> = ({
    gakumonId
  }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className='Dialog' role="button" tabIndex={0} onClick={closeDialog}>
        <div className='Dialog__content'  role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>
          <div className='Dialog__gakumonIdText'>
            学モンNo. {gakumonId}
          </div>

          <QandA gakumonId={gakumonId} />
        </div>
      </div>
    );
  };

  return {
    Dialog,
    openDialog,
    closeDialog
  };
};

export default useDialog;
