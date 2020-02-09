
module.exports = [{
  id: 'paxos-raft',
  autoStart: true,
  activate: function (app) {
    console.log('JupyterLab extension jupyterlab_myextension is activated!')
    console.log(app.commands)
  }
}]
