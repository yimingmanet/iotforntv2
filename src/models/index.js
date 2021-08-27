// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DeviceMessage } = initSchema(schema);

export {
  DeviceMessage
};