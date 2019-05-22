import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor'

const LEADER_HOST = 'http://localhost:4040'
const CHECK_INTERVAL = 5000

export const getHostname = () => process.env.HOSTNAME

export const getCurrentLeader = () => {
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

export const isLeader = () => {
  const leader = getCurrentLeader()
  return getHostname() === leader
}

let lastLeader = null
export const onLeaderChange = callback => {
  const call = () => {
    const leader = getCurrentLeader()
    const isLeader = getHostname() === leader
    if (leader !== lastLeader) {
      callback(isLeader, { leader, lastLeader, hostname: getHostname() })
      lastLeader = leader
    }
  }

  call()
  Meteor.setInterval(call, CHECK_INTERVAL)
}
