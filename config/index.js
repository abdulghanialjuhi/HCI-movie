const dev = process.env.NODE_ENV !== 'production'

export const nextApi = dev ? 'http://localhost:3000' : 'https://hci-movie.vercel.app'

export const server = 'https://movie-back-end.herokuapp.com'