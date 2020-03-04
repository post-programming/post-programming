
module.exports = [{
  id: 'paxos-raft',
  autoStart: true,
  activate: function (app) {
    console.log('paxos-raft is activated!')
    console.log(app.commands)
  }
}]
