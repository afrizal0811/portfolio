import {
  colorBarVariant,
  DisapperedFuzzyVariant,
  fuzzyVariant,
  menuVariant,
  startButtonVariant,
  transitionVariant,
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
export const colorBarProps = {
  variants: colorBarVariant,
  initial: 'intial',
  animate: 'animate',
}

export const menuProps = (isInView) => {
  return {
    variants: isInView ? menuVariant : '',
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
