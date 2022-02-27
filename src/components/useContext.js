import React, { createContext } from 'react'

const userContext = React.createContext()

const userConsumer = userContext.Consumer
const userProvider = userContext.Provider

export { userConsumer, userProvider }