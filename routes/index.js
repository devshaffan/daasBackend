const authRouter = require('./auth');

const userRouter = require('./user')
const userAccessRouter = require('./userAccess');
const knowledgeTracingRouter = require('./knowledgeTracing')
const datasetRouter = require('./datasets')
module.exports = function (app) {
  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/userAccess', userAccessRouter);
  app.use('/api/kt', knowledgeTracingRouter)
  app.use('/api/datasets', datasetRouter)
};