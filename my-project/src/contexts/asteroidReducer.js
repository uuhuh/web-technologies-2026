export const initialAsteroidsState = {
  asteroids: [],
  destroyment: [],
  isOnlyDanger: false,
  isKilometers: true,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ASTEROIDS":
      return { ...state, asteroids: action.payload }
    case "ADD_DESTROYMENT":
      if (state.destroyment.some((a) => a.id === action.payload.id)) return state
      return { ...state, destroyment: [...state.destroyment, action.payload] }
    case "REMOVE_DESTROYMENT":
      return { ...state, destroyment: state.destroyment.filter((a) => a.id !== action.payload) }
    case "TOGGLE_DANGER_FILTER":
      return { ...state, isOnlyDanger: !state.isOnlyDanger }
    case "SET_KILOMETERS":
      return { ...state, isKilometers: action.payload }
    default:
      return state
  }
}