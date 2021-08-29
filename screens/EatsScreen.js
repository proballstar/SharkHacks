// EatScreen.js

import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Restaurant from '../Restaurants';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { KeyboardAvoidingView } from 'react-native';
import { render } from 'react-dom';

const EatsScreen = () => {

  return (
    <view>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Getting the best places in town</title>
      <ol id="places" />
    </view>
  )
}

export default EatsScreen