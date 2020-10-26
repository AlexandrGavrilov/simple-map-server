import styled, { CSSObject } from 'styled-components';

interface IGoogleMapStylesStylesStyles {
  mapWrapper: CSSObject
  map: CSSObject
  actionsWrapper: CSSObject
}

const googleMapStyles: IGoogleMapStylesStylesStyles = {
  mapWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 400,
    height: 400,
  },
  actionsWrapper: {
    width: 400,
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'space-around'
  }
}

export const MapWrapper = styled.div`
  ${ googleMapStyles.mapWrapper }
`;

export const MapContainer = styled.div`
  ${ googleMapStyles.map }
`;
export const ActionsWrapper = styled.div`
  ${ googleMapStyles.actionsWrapper }
`;
