const getDataSheetInfo = () => {
  const data = [
    {
      buildingName: "Building 1",
      floorName: "Floor 1",
      roomName: "Room 1",
      boxName: "Box 1",
      deviceName: "Device 1",
      deviceType: "light",
      devicePath: "B0F0R0SB0-D0",
      deviceId: "5f1478e19595281477395198",
    },
    {
      buildingName: "Building 2",
      floorName: "Floor 2",
      roomName: "Room 3",
      boxName: "Box 1",
      deviceName: "Device 1",
      deviceType: "light",
      devicePath: "B0F0R0SB0-D0",
      deviceId: "5f1478e19595281477395198",
    },
  ];

  return data;
};

module.exports = { getDataSheetInfo };
