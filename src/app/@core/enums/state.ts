export enum State {
  PLANNED = 'planned',
  RELEASED = 'released',
  PROCESSED = 'processed',
  CLOSED = 'closed',
}

export function getNextState(currentState: State): State {
  switch (currentState) {
    case State.PLANNED:
      return State.RELEASED;
    case State.RELEASED:
      return State.PROCESSED;
    case State.PROCESSED:
      return State.CLOSED;
    case State.CLOSED:
      return currentState; // can't transition from these states
    default:
      throw new Error(`Invalid state: ${currentState}`);
  }
}
