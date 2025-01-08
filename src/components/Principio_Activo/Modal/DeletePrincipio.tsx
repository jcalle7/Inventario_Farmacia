//import * as React from "react";

import '../../CSS/Principio_Activo/Modal/DeletePrincipio.css'; 

interface DeleteButtonProps {
  variant: 'cancel' | 'confirm';
  onClick: () => void;
  label: string;
}

function DeleteButton({ variant, onClick, label }: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`delete-button ${variant}`}
      type="button"
    >
      {label}
    </button>
  );
}

interface ConfirmationDeleteProps {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmationDelete({ message, onCancel, onConfirm }: ConfirmationDeleteProps) {
  return (
    <div className="flex flex-col px-8 pt-8 pb-6 bg-white rounded-sm shadow-md max-w-[436px]" role="dialog" aria-modal="true">
      <div className="flex gap-4 items-start w-full text-base font-medium text-black text-opacity-80">
        <div className="flex shrink-0 h-[22px] w-[22px]" />
        <div className="overflow-hidden flex-1 shrink min-w-[240px]">
          {message}
        </div>
      </div>
      <div className="flex gap-2 items-center self-end mt-6 text-sm leading-loose text-center whitespace-nowrap">
        <DeleteButton 
          variant="cancel" 
          onClick={onCancel}
          label="Cancelar"
        />
        <DeleteButton 
          variant="confirm" 
          onClick={onConfirm}
          label="OK"
        />
      </div>
    </div>
  );
}
