import {
  colorBarVariant,
  DisapperedFuzzyVariant,
  fuzzyVariant,
  glitchTextVariant,
  glitchImageVariant,
  menuVariant,
  scanlinesVariant,
  startButtonVariant,
  transitionVariant,
  wobbleyVariant,
} from './variants'

export const transitionProps = {
  variants: transitionVariant,
  initial: 'intial',
  animate: 'animate',
  exit: 'exit',
}

export const fuzzyProps = {
  variants: fuzzyVariant,
  initial: 'intial',
  animate: 'animate',
  exit: 'exit',
}

export const DisapperedFuzzyProps = {
  variants: DisapperedFuzzyVariant,
  initial: 'intial',
  animate: 'animate',
}

export const scanlinesProps = {
  variants: scanlinesVariant,
  initial: 'intial',
  animate: 'animate',
  exit: 'exit',
}

export const colorBarProps = {
  variants: colorBarVariant,
  initial: 'intial',
  animate: 'animate',
}

export const glitchProps = (type) => {
  return {
    variants: type === 'text' ? glitchTextVariant : glitchImageVariant,
    initial: 'intial',
    animate: 'animate',
  }
}

export const wobbleyProps = {
  variants: wobbleyVariant,
  initial: 'intial',
  animate: 'animate',
}

export const menuProps = (isInView) => {
  return {
    variants: isInView && menuVariant,
    initial: 'initial',
    animate: 'animate',
  }
}

export const startButtonProps = (isClicked) => {
  return {
    variants: startButtonVariant,
    initial: 'initial',
    animate: isClicked ? 'click' : 'unclick',
  }
}
