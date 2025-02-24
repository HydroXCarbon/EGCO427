function ensureToken(req, res, next) {
  barrerHeader = req.headers["authorization"];
  if (typeof barrerHeader !== "undefined") {
    const barrer = barrerHeader.split(" ");
    const barrerToken = barrer[1];
    req.token = barrerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

export { ensureToken }