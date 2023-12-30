// 'blue',
//   'purple',
//   'cyan',
//   'green',
//   'magenta',
//   'pink',
//   'red',
//   'orange',
//   'yellow',
//   'volcano',
//   'geekblue',
//   'lime',
//   'gold';

export const getCategoryColor = (category?: string) => {
  let color = '';

  if (!category) {
    return;
  }

  switch (category) {
    case 'engineering':
      color = 'pink';
      break;
    case 'soft skills':
      color = 'green';
      break;
    case 'technical':
      color = 'yellow';
      break;
    case 'leadership':
      color = 'purple';
      break;
    default:
      color = 'geekblue';
      break;
  }

  return color;
};
