export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const HOST = process.env.HOST ?? '127.0.0.1';
export const PORT = process.env.PORT ?? '8080';
export const SSL_KEY_PATH = process.env.SSL_KEY_PATH ?? '../../ssl/RootCA.key';
export const SSL_CERT_PATH = process.env.SSL_CERT_PATH ?? '../../ssl/RootCA.crt';
