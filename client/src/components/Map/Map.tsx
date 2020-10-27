import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
	memo
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Result} from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons/lib';

// @ts-ignore
import DG from '2gis-maps';

import { MapWrapper, MapContainer, ActionsWrapper } from '@components/Map/styles';

import { userActions } from '@src/store/actions/userActions';
import { getUserProfile } from '@src/store/rootReducer';

export interface ICoords {
	lat: null | number;
	lng: null | number;
}
export const Map: React.FC = memo(() => {
	const dispatch = useDispatch()

	const { markers: userMarkers } = useSelector(getUserProfile)

	const [hasError, setError] = useState(false);

	const [map, setMap] = useState<any>(null);

	const [markers, setMarkers] = useState<ICoords[]>([]);

	const saveMarkers = useCallback(() => dispatch(userActions.saveMarkers(markers)), [markers]);

	const zoomMinusRef = useRef<any>(null)
	const zoomPlusRef = useRef<any>(null)
	const showMarkersRef = useRef<any>(null)

	useEffect(() => {

		navigator.geolocation.getCurrentPosition((position) => {
			const { longitude: lng, latitude: lat } = position.coords;

			DG.then(() => {

				const map = DG.map('map', {
					center: [lat, lng],
					zoom: 15
				})

				DG.marker([lat, lng]).addTo(map).bindPopup('Your location');

				setMap(map);
			});
		},() => setError(true), { enableHighAccuracy: true })
	})

	useEffect(() => {
		if (!zoomMinusRef || !zoomPlusRef || !showMarkersRef || !map) return;

		map!.on('click', (e: any) => {
			const { lat, lng } = e.latlng

			setMarkers(markers => ([ ...markers, { lat, lng } ]))

			DG.marker([lat, lng]).addTo(map);
		})

		zoomMinusRef!.current!.onclick = () => map.zoomIn();
		zoomPlusRef!.current!.onclick = () => map.zoomOut();

		showMarkersRef!.current!.onclick = () => {
			const markers = DG.featureGroup()

			userMarkers.forEach(({ lat, lng }: ICoords) => {
				DG.marker([lat, lng]).addTo(markers);
			})

			markers.addTo(map);
		};

		if (userMarkers) {
			setMarkers(markers => ([ ...markers, ...userMarkers ]))
		}
	},[zoomPlusRef, zoomMinusRef, userMarkers, map])

	if (hasError) {
		return (
			<Result
				status="warning"
				title="Oooops, something went wrong(("
			/>
		)
	}

	return (
		<MapWrapper>
			<ActionsWrapper>
					Zoom:
					<MinusOutlined
						ref={ zoomMinusRef }
						style={{ width: 25, height: 25, cursor: 'pointer' }}
					/>
					<PlusOutlined
						ref={ zoomPlusRef }
						style={{ width: 25, height: 25, cursor: 'pointer' }}
					/>
					<Button onClick={ saveMarkers } >Save</Button>
					<Button ref={ showMarkersRef }>Show</Button>
			</ActionsWrapper>
			<MapContainer id='map'/>
		</MapWrapper>
	)
})
