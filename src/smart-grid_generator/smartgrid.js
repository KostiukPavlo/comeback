const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'sass',
  columns: 12,
  offset: '20px',
  mobileFirst: false,
  container: {
    maxWidth: '1440px',
    fields: '80px'
  },
  breakPoints: {
    lg: {
      width: '1200px',
      fields: '20px'
    },
    smd: {
      width: '1100px',
      fields: '15px'
    },
    md: {
      width: '960px',
      fields: '15px'
    },
    sm: {
      width: '720px',
      fields: '10px'
    },
    xs: {
      width: '480px',
      fields: '5px'
    }
    
  }
};

smartgrid('../local_modules/smart-grid_sass/', settings);

