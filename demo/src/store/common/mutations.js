export const toc = (state, toc) => {
  state.toc = toc
}

export const SET_CONFIG_DIALOG = (state, data) => {
  state.configDialog = data
}

export const SET_SERVICE_TYPE = (state, data) => {
  state[data.type] = data.value
}
