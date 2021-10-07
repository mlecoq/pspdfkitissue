import React, {useState} from 'react';
import PSPDFKitView from '@archireport/react-native-pspdfkit';
import {View} from 'react-native';

export default function PdfScreen() {
  const [positions, setPositions] = useState([]);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <PSPDFKitView
        configuration={{
          thumbnailBarMode: 'scrollable',
          pageTransition: 'scrollContinuous',
          scrollDirection: 'vertical',
        }}
        style={{flex: 1, backgroundColor: 'blue'}}
        document="file:///android_asset/report.pdf"
        positionTitle={`${positions.length}`}
        positions={positions}
        onPositionChanged={({nativeEvent}) => {
          switch (nativeEvent.action) {
            case 'CREATED': {
              setPositions(pos =>
                pos.concat({
                  ...nativeEvent.position,
                  id: `pos${pos.length + 1}`,
                }),
              );
              break;
            }
            case 'UPDATED': {
              setPositions(pos =>
                pos.map(p =>
                  p.id === nativeEvent.position.id ? nativeEvent.position : p,
                ),
              );
            }
          }
        }}
      />
    </View>
  );
}
