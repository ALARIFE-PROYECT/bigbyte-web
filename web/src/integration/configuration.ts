import { Configuration } from "@bigbyte/utils/integration";
import { ARGV_ACCESS_LOG_FILE, ARGV_ACCESS_LOG_FILE_SIZE_INTERVAL, ARGV_ACCESS_LOG_FILE_TIME_INTERVAL, ARGV_API_ROOT, ARGV_IP, ARGV_PORT, ARGV_PROTOCOL, ENV_ACCESS_LOG_FILE, ENV_ACCESS_LOG_FILE_SIZE_INTERVAL, ENV_ACCESS_LOG_FILE_TIME_INTERVAL, ENV_API_ROOT, ENV_IP, ENV_PORT, ENV_PROTOCOL } from "../constant";


export default {
    commandDeclaration: [
        {
            name: 'run',
            flags: [
                {
                    name: ARGV_PROTOCOL,
                    env: ENV_PROTOCOL,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: 'http',
                    description: 'Protocol to use for the server. Default is "http".',
                    detail: 'The protocol defines how the server will communicate with clients. It can be "http" or "https". If "https" is used, the server will require SSL certificates to be configured.'
                },
                {
                    name: ARGV_IP,
                    env: ENV_IP,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: undefined,
                    description: 'IP address to bind the server. Default is "0.0.0.0".',
                    detail: 'The IP address defines which network interface the server will listen on.'
                },
                {
                    name: ARGV_PORT,
                    env: ENV_PORT,
                    type: 'value',
                    valueType: 'number',
                    defaultValue: undefined,
                    description: 'Port to bind the server. Default is 8080.',
                    detail: 'The port defines the network port on which the server will listen for incoming requests. It must be an integer between 0 and 65535.'
                },
                {
                    name: ARGV_API_ROOT,
                    env: ENV_API_ROOT,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: '/',
                    description: 'Root path for the API. Default is "/api".',
                    detail: 'The API root path is the base URL for all API endpoints. For example, if the API root is "/api" and the endpoint is "/users", the full URL will be "/api/users".'
                },
                {
                    name: ARGV_ACCESS_LOG_FILE,
                    env: ARGV_ACCESS_LOG_FILE,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: undefined,
                    description: 'Path to the access log file. If not specified, no access log will be created.',
                    detail: 'The access log file is used to store information about incoming requests to the server, such as the request method, URL, status code, and response time. This can be useful for monitoring and debugging purposes.'
                },
                {
                    name: ARGV_ACCESS_LOG_FILE_TIME_INTERVAL,
                    env: ENV_ACCESS_LOG_FILE_TIME_INTERVAL,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: undefined,
                    description: 'Time interval in milliseconds to rotate the access log file. If not specified, the access log file will not be rotated based on time.',
                    detail: 'The access log file can be rotated based on time to prevent it from growing indefinitely. This is useful for long-running applications where you want to keep the log files manageable. For example, if set to 86400000 (24 hours), a new log file will be created every day.'
                },
                {
                    name: ARGV_ACCESS_LOG_FILE_SIZE_INTERVAL,
                    env: ENV_ACCESS_LOG_FILE_SIZE_INTERVAL,
                    type: 'value',
                    valueType: 'string',
                    defaultValue: undefined,
                    description: 'Size interval in bytes to rotate the access log file. If not specified, the access log file will not be rotated based on size.',
                    detail: 'The access log file can be rotated based on size to prevent it from growing indefinitely. This is useful for applications that generate a lot of log data and you want to keep the log files manageable. For example, if set to 10485760 (10 MB), a new log file will be created when the current log file reaches 10 MB in size.'
                }
            ],
        }
    ]
} as Configuration;
