const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const FINISH_EDIT = 'FINISH_EDIT';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
const REORDER_TODOS = 'REORDER_TODOS';

const IDLE = 'idle';
const ADDING = 'adding';
const EDITING = 'editing';
const DELETING = 'deleting';
const TOGGLING = 'toggling';
const CLEARING = 'clearing';
const REORDERING = 'reordering';

class TodoStateMachine {
  constructor() {
    this.state = IDLE;
  }

  transition(event) {
    const transitions = {
      [IDLE]: {
        [ADD_TODO]: ADDING,
        [EDIT_TODO]: EDITING,
        [DELETE_TODO]: DELETING,
        [TOGGLE_TODO]: TOGGLING,
        [CLEAR_COMPLETED]: CLEARING,
        [REORDER_TODOS]: REORDERING,
        [FINISH_EDIT]: IDLE,
      },
      [ADDING]: {
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [EDITING]: {
        [FINISH_EDIT]: IDLE,
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [DELETING]: {
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [TOGGLING]: {
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [CLEARING]: {
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [REORDERING]: {
        SUCCESS: IDLE,
        FAILURE: IDLE,
      },
      [FINISH_EDIT]: {
        SUCCESS: IDLE,
        FAILURE: EDITING,
      },
    };

    const nextState = transitions[this.state][event];
    if (nextState) {
      this.state = nextState;
    } else {
      console.error(`Invalid transition from ${this.state} on ${event}`);
    }
  }
}

export {
  ADD_TODO,
  EDIT_TODO,
  FINISH_EDIT,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  REORDER_TODOS,
};

export default TodoStateMachine;
