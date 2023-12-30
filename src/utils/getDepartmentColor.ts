export const getDepartmentColor = (position: string) => {
  let color = '';

  if (!position) {
    return;
  }

  switch (true) {
    case position.includes('FE'):
      color = 'magenta';
      break;
    case position.includes('BE'):
      color = 'geekblue';
      break;
    case position.includes('DO'):
      color = 'purple';
      break;
    case position.includes('FS'):
      color = 'lime';
      break;
    case position.includes('ME'):
      color = 'cyan';
      break;
    default:
      color = 'geekblue';
      break;
  }

  return color;
};
