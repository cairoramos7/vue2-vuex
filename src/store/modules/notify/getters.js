const getters = {
  message: state => state.msg,
  alertClass: state => 'alert-' + state.type,
  status: state => state.status
}

export default getters
