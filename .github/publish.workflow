workflow "Publish" {
  on = "push"
  resolves = ["deploy"]
}

action "filter" {
  uses = "actions/bin/filter@a9036ccda9df39c6ca7e1057bc4ef93709adca5f"
  args = "tag"
}

action "build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["filter"]
  args = "install"
}

action "test" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["build"]
  args = "test"
}

action "deploy" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  secrets = ["CF_ZONE_ID", "CF_API_KEY", "TW_CONSUMER_KEY", "TW_CONSUMER_SECRET", "TW_ACCESS_KEY", "TW_ACCESS_SECRET"]
  env = {
    CI = "1"
  }
  needs = ["test"]
  args = "deploy"
}
