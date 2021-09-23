import React from 'react';
import PSPDFKitView from '@archireport/react-native-pspdfkit';
import {View} from 'react-native';

export default function PdfScreen() {
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
      />
    </View>
  );
}
