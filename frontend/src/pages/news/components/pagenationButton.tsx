type Props = {
  label: string | number;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
};

const PagenationButton = ({ label, onClick, disabled, isActive }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-deathNote text-[2rem] ${
        isActive
          ? "border-b-2 text-[2.5rem] text-white"
          : "border-none text-neutral-400"
      } `}
    >
      {label}
    </button>
  );
};

export default PagenationButton;
