export default `

type dataSheetInfo{
    buildingName:String!,
    floorName:String!,
    roomName:String!,
    boxName:String!,
    deviceName:String!,
    deviceType:String!,
    devicePath:String!,
    deviceId:String!
}

type Query {
   data: [dataSheetInfo]
}

type Mutation {}
`;
