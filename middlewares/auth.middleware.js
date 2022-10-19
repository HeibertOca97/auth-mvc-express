const authMiddleware = (req, res, next) => {
  if(req.session.authUser){
    res.redirect('/dashboard');
  }
  
  res.setHeader('content-type', 'text/html');
  next();
}

const guestMiddleware = (req, res, next) => {
  if(!req.session.authUser){
    res.redirect('/login');
  }

  res.setHeader('content-type', 'text/html');
  next();
}

module.exports = {
  authMiddleware,
  guestMiddleware,
}
