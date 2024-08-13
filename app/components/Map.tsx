// "use client";

// import { useEffect, useRef } from "react";

// import { Box } from "@mui/material";
// import { Loader } from "@googlemaps/js-api-loader";

// export default function GoogleMaps() {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
//         version: "weekly",
//       });

//       const { Map } = await loader.importLibrary("maps");

//       const { Marker } = await loader.importLibrary("marker");

//       const position = {
//         lat: 42.150092922599434,
//         lng: 24.74748952598738,
//       };

//       const mapOptions = {
//         center: position,
//         zoom: 14,
//         disableDefaultUI: true,
//         styles: [
//           {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#e9e9e9",
//               },
//               {
//                 lightness: 17,
//               },
//             ],
//           },
//           {
//             featureType: "landscape",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f5f5f5",
//               },
//               {
//                 lightness: 20,
//               },
//             ],
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.fill",
//             stylers: [
//               {
//                 color: "#ffffff",
//               },
//               {
//                 lightness: 17,
//               },
//             ],
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [
//               {
//                 color: "#ffffff",
//               },
//               {
//                 lightness: 29,
//               },
//               {
//                 weight: 0.2,
//               },
//             ],
//           },
//           {
//             featureType: "road.arterial",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#ffffff",
//               },
//               {
//                 lightness: 18,
//               },
//             ],
//           },
//           {
//             featureType: "road.local",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#ffffff",
//               },
//               {
//                 lightness: 16,
//               },
//             ],
//           },
//           {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f5f5f5",
//               },
//               {
//                 lightness: 21,
//               },
//             ],
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#dedede",
//               },
//               {
//                 lightness: 21,
//               },
//             ],
//           },
//           {
//             elementType: "labels.text.stroke",
//             stylers: [
//               {
//                 visibility: "on",
//               },
//               {
//                 color: "#ffffff",
//               },
//               {
//                 lightness: 16,
//               },
//             ],
//           },
//           {
//             elementType: "labels.text.fill",
//             stylers: [
//               {
//                 saturation: 36,
//               },
//               {
//                 color: "#333333",
//               },
//               {
//                 lightness: 40,
//               },
//             ],
//           },
//           {
//             elementType: "labels.icon",
//             stylers: [
//               {
//                 visibility: "off",
//               },
//             ],
//           },
//           {
//             featureType: "transit",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f2f2f2",
//               },
//               {
//                 lightness: 19,
//               },
//             ],
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.fill",
//             stylers: [
//               {
//                 color: "#fefefe",
//               },
//               {
//                 lightness: 20,
//               },
//             ],
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [
//               {
//                 color: "#fefefe",
//               },
//               {
//                 lightness: 17,
//               },
//               {
//                 weight: 1.2,
//               },
//             ],
//           },
//         ],
//       };

//       const map = new Map(mapRef.current, mapOptions);

//       const marker = new Marker({
//         map: map,
//         position: position,
//       });
//     };

//     initMap();
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         aspectRatio: "3/1",
//       }}
//       ref={mapRef}
//     />
//   );
// }
