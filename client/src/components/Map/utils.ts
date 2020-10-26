export const getArea = ( addressArray: any ) => {
  let area = '';
  for( let i = 0; i < addressArray.length; i++ ) {
    if ( addressArray[ i ].types[0]  ) {
      for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
        if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
          area = addressArray[ i ].long_name;
          return area;
        }
      }
    }
  }
  return '';
};

export const getState = ( addressArray: any ) => {
  let state = '';
  for( let i = 0; i < addressArray.length; i++ ) {
    for( let i = 0; i < addressArray.length; i++ ) {
      if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
        state = addressArray[ i ].long_name;
        return state;
      }
    }
  }
  return '';
};

export const getСountry = ( addressArray: any ) => {
  let state = '';
  for( let i = 0; i < addressArray.length; i++ ) {
    for( let i = 0; i < addressArray.length; i++ ) {
      if ( addressArray[ i ].types[0] && 'country' === addressArray[ i ].types[0] ) {
        state = addressArray[ i ].long_name;
        return state;
      }
    }
  }
  return '';
};

export const getCity = ( addressArray: any ) => {
  let city = '';
  for( let i = 0; i < addressArray.length; i++ ) {
    if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
      city = addressArray[ i ].long_name;
      return city;
    }
  }
  return '';
};
