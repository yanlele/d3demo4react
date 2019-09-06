export const getColor = (color: number) => {
  switch (color) {
    case 1:
      return 'red';
    case 2:
      return 'green';
    case 3:
      return 'blue';
    case 4:
      return 'yellow';
    case 5:
      return 'black';
    default:
      return 'white';
  }
};

export const getColorCode = (color: number) => {
  switch (color) {
    case 1:
      return '#888';
    case 2:
      return '#666';
    case 3:
      return '#444';
    case 4:
      return '#222';
    case 5:
      return '#000';
    default:
      return '#000';
  }
};
