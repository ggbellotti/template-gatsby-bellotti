/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "lazysizes"

import React from "react"
import ReactDOM from "react-dom"
import SwUpdater from "./src/components/SwUpdater"

function onServiceWorkerUpdateReady() {
  const root = document.createElement("div")
  document.body.appendChild(root)
  console.log("SW Asks for update!")

  ReactDOM.render(<SwUpdater />, root)
}

export { onServiceWorkerUpdateReady }
