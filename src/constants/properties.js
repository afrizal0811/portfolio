import {
  colorBarVariant,
  disappearedFuzzyVariant,
  fuzzyVariant,
  glitchTextVariant,
  glitchImageVariant,
  menuVariant,
  scanlinesVariant,
  startButtonVariant,
  transitionVariant,
  wobbleyVariant,
} from './variants';

// Catatan: semua key 'intial' (typo lama) sudah diperbaiki ke 'initial'

export const transitionProps = {
  variants: transitionVariant,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const fuzzyProps = {
  variants: fuzzyVariant,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

// Sebelumnya: DisapperedFuzzyProps (typo)
export const disappearedFuzzyProps = {
  variants: disappearedFuzzyVariant,
  initial: 'initial',
  animate: 'animate',
};

export const scanlinesProps = {
  variants: scanlinesVariant,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const colorBarProps = {
  variants: colorBarVariant,
  initial: 'initial',
  animate: 'animate',
};

export const glitchProps = (type) => ({
  variants: type === 'text' ? glitchTextVariant : glitchImageVariant,
  initial: 'initial',
  animate: 'animate',
});

export const wobbleyProps = {
  variants: wobbleyVariant,
  initial: 'initial',
  animate: 'animate',
};

export const menuProps = (isInView) => ({
  variants: isInView ? menuVariant : undefined,
  initial: 'initial',
  animate: 'animate',
});

export const startButtonProps = (isClicked) => ({
  variants: startButtonVariant,
  initial: 'initial',
  animate: isClicked ? 'click' : 'unclick',
});
