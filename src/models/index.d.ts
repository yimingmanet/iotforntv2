import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeviceMessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DeviceMessage {
  readonly id: string;
  readonly deviceid: string;
  readonly hum: number;
  readonly tem: number;
  readonly timestamp: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DeviceMessage, DeviceMessageMetaData>);
  static copyOf(source: DeviceMessage, mutator: (draft: MutableModel<DeviceMessage, DeviceMessageMetaData>) => MutableModel<DeviceMessage, DeviceMessageMetaData> | void): DeviceMessage;
}