import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { salesforceUsers } from './functions/salesforce-users/resource.js';


defineBackend({
  auth,
  data,
  salesforceUsers
});
