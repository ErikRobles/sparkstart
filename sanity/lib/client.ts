import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skeg1GBfSe22LtrCyR3Xxqn2Z5n88HTe5882SdfqW3DecXJTuelvMwWGgsNcZqgAiBwmpPmwsfeHR4vsImTogBpUoldaTxCTMTfMuh5V8WX7A6tnGLGats6QYkkOEu9so5JssdcUa0Ii5QH1zzYUP15LCjEeZFx9p6ZnU1ySPw9gtilTaozl",
}); 
