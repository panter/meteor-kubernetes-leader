import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor'

const LEADER_HOST = 'http://localhost:4040'
const CHECK_INTERVAL = 5000

const getHostname = () => process.env.HOSTNAME

const getCurrentLeader = () => {
  try {
    if (Meteor.isDevelopment) {
      return process.env.HOSTNAME
    }
    const { content } = HTTP.get(LEADER_HOST)
    const { name } = JSON.parse(content)
    return name
  } catch (error) {
    console.error(error)
    return null
  }
}

const isLeader = () => {
  const leader = getCurrentLeader()
  return getHostname() === leader
}

let lastLeader = null

export const onBecomeLeader = callback => {
  const check = () => {
    if (isLeader()) {
      callback()
    } else {
      console.log(
        'not leeader, checking again. Currrent leader is ',
        getCurrentLeader()
      )
      Meteor.setTimeout(check, CHECK_INTERVAL)
    }
  }
  check()
}
