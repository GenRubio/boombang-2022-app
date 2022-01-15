const SocketIOController = {
  init(io, clientC) {
    this.reciveDataSocketIO(io, clientC);
  },
  reciveDataSocketIO(io, clientC) {
    const $this = this;
    io.on("connection", (socket) => {
      socket.on("change-ficha-user", (data) => {
        var clientIp = socket.request.connection.remoteAddress;
        $this.sendDataCSharp(clientC, $this.prepairData(data, clientIp));
      });
    });
  },
  prepairData(response, ip) {
    let callback = "";
    Object.values(response).forEach(function (parameter, index, arr) {
      if (index == 0) {
        callback += parameter + "³²";
      } else {
        callback += parameter + "³";
      }
    });
    callback += ip + "³";
    callback = callback.replace('::ffff:', '');
    return callback.substring(0, callback.length - 1);
  },
  sendDataCSharp(clientC, data) {
    clientC.write(data);
  },
};

module.exports = SocketIOController;
