export type ClassValue =
  | string
  | undefined
  | null
  | false
  | Record<string, boolean | undefined | null>
  | ClassValue[];
