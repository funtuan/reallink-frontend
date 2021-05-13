const config = {
  backendHost: '$VUE_APP_BACKEND_HOST'
}

export default (name) => {
  if (!(name in config)) {
    return
  }

  const value = config[name]

  if (!value) {
    return
  }

  if (value.startsWith('$VUE_APP_')) {
    const envName = value.substr(1)
    const envValue = process.env[envName]
    if (envValue) {
      return envValue
    }
  } else {
    return value
  }
}
