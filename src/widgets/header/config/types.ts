import { ActiveBlock } from "./../../../pages/Main";
export type HeaderProps = {
  activeBlock: ActiveBlock;
  setActiveBlock: (activeBlock: ActiveBlock) => void;
};

export type HeaderBtnProps = {
  activeBlockType: ActiveBlock;
  activeBlock: ActiveBlock;
  children: React.ReactElement;
  handleClick: () => void;
  className?: string;
};
