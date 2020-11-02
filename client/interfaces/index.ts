// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

enum UtilityType {
  smoke,
  flash,
  molotov,
  grenade
}

export type User = {
  id: number
  name: string
}

export type Utility = {
  id: number
  title: string
  video: string
  type: UtilityType
  map: Map
  team: Team
}

export type Map = {
  name: string
  utilities: Utility
}

export type Team = {
  name: string
}

export interface IUtilityFormValues {
  firstName: string;
  lastName: string;
  email: string;
}