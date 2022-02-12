const CSharpController = {
  init(io, clientC) {
    this.reciveDataCSharp(io, clientC);
  },
  sendDataToSocketIO(io, key, uid, parameters) {
    switch (key) {
      case "user-login":
        io.emit(key + "-" + parameters[1], parameters);
        break;
      case "user-entering-area":
        io.emit(key + "-" + uid, parameters);
        break;
      case "user-leaving-area":
        io.emit(key + "-" + uid, parameters);
        break;
      case "user-within-area":
        io.emit(key + "-" + uid, parameters);
        break;
      case "user-in-flowepower":
        io.emit(key + "-" + uid, parameters);
        break;
    }
  },
  reciveDataCSharp(io, clientC) {
    const $this = this;
    clientC.on("data", function (data) {
      dataDecrypt = data.toString("utf8");
      $this.sendDataToSocketIO(
        io,
        $this.getKey(dataDecrypt),
        $this.getUID(dataDecrypt),
        $this.getParameters(dataDecrypt)
      );
    });
  },
  getUID(data) {
    let parameters = data.split("³²")[1];
    if (parameters.includes("³")) {
      return parameters.split("³")[0];
    }
    return parameters;
  },
  getKey(data) {
    return data.split("³²")[0];
  },
  getParameters(data) {
    return data.split("³²")[1].split("³");
  },
};

module.exports = CSharpController;
