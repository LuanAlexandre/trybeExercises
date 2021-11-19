export const NEXT_COLOR = 'NEXT_COLOR';
export const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

export const changeToNextColor = (colorIndex) => ({
  type: NEXT_COLOR,
  index: colorIndex,
});

export const changeToPreviousColor = (colorIndex) => ({
  type: PREVIOUS_COLOR,
  index: colorIndex,
});
