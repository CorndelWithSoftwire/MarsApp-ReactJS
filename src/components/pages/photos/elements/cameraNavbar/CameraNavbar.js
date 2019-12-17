import React from 'react';
import RoverCameraButton from './RoverCameraButton';
import './CameraNavbar.css';

export default function CameraNavbar() {
  return (
    <div className="camera-navbar">
      <RoverCameraButton cameraName="FHAZ" />
      <RoverCameraButton cameraName="RHAZ" />
      <RoverCameraButton cameraName="MAST" />
      <RoverCameraButton cameraName="CHECAM" />
      <RoverCameraButton cameraName="MAHLI" />
      <RoverCameraButton cameraName="MARDI" />
      <RoverCameraButton cameraName="NAVCAM" />
      <RoverCameraButton cameraName="PANCAM" />
      <RoverCameraButton cameraName="MINITES" />
    </div>
  );
}