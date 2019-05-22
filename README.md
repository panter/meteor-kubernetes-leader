Find out which of your pods is the leader in a kubernetes setup. It assumes that you have a k8s.gcr.io/leader-elector sidecar container

Usage:

```
import { onBecomeLeader } from 'meteor/panter:kubernetes-leader'

onBecomeLeader(() => {
  console.log('i am leader now!')
})

```

A leader is like the pope (unless you are Benedict XVI.) - you keep this position until you die.
So you don't have to worry about cleaning up...
