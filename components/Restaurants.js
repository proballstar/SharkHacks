import React from 'react';



const request = {
    location: new google.maps.LatLng(51.5287352, -0.3817841),
    radius: 5000,
    type: ['restaurant']
};

const results = [];
const places = document.getElementById('places');
const service = new google.maps.places.PlacesService(places);

const callback = (response, status, pagination) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        results.push(...response);
    }

    if (pagination.hasNextPage) {
        setTimeout(() => pagination.nextPage(), 2000);
    } else {
        displayResults();
    }
}



export default Restaurants





