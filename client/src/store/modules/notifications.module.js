export default {
  state: {
    notifications: []
  },
  mutations: {
    SOCKET_CHAT_MESSAGE(state, message) {
      state.notifications.push({ type: 'message', payload: message });
    }
  },
}