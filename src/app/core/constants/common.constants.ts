export enum Breakpoint {
  mobile = 360,
  tablet = 768,
  desktop = 1024,
  huge = 1280,
}

// Secret para encriptar/ desencriptar
export const TEMPORAL_PASS = '4694984894g8fhg8hg!!#454854fdgfd';

export enum State {
  CREATED = 'CREATED',
  IN_PROCESS = 'IN_PROCESS',
  CLOSED = 'CLOSED',
}

export const AssignState = {
  CREATED: State.CREATED,
  IN_PROCESS: State.IN_PROCESS,
  CLOSED: State.CLOSED,
};

export const AssignType = {
  P: 'PETICIÓN',
  Q: 'QUEJA',
};
