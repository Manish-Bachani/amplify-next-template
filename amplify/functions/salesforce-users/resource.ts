import { defineFunction } from '@aws-amplify/backend';

export const salesforceUsers = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'salesforce-users',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});