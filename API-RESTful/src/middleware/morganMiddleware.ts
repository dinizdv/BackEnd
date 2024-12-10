import morgan, { StreamOptions } from 'morgan' // for loggins of the requests HTTP
import config from 'config'
import Logger from '../../config/logger'

const stream: StreamOptions = { // interface
    write: (message) => Logger.http(message) // write: function that receives the log and set to HTTP method
}

const skip = () => {
    const env = config.get<string>('env') || 'development'
    return env !== 'development'
}

const morganMiddleware = morgan(
    ':method :url :status :res[content.length] - :response-time',
    {stream, skip} // logs can be ignorated
)

export default morganMiddleware