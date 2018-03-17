class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

// TODO add error handlers everywhere were it's need

module.exports = HttpError;
