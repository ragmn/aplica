/**
 * HubSpot Forms API integration.
 * Submits to HubSpot's Forms v3 endpoint using portal ID and form GUIDs.
 * No HubSpot embed script required — full control over UI.
 *
 * Lead magnet form credentials (from embed code):
 *   Portal ID : 148229316
 *   Form GUID : 45bde496-c61e-4a76-9430-99833be4224a
 *   Region    : eu1
 */

interface HubSpotField {
  objectTypeId?: string
  name: string
  value: string
}

interface HubSpotFormPayload {
  portalId: string
  formGuid: string
  fields: HubSpotField[]
  context?: {
    pageUri?: string
    pageName?: string
  }
}

async function submitToHubSpot(payload: HubSpotFormPayload): Promise<void> {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${payload.portalId}/${payload.formGuid}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: payload.fields,
      context: payload.context,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(
      `HubSpot submission failed: ${response.status} — ${errorBody}`
    )
  }
}

export async function submitContactForm(data: {
  name: string
  email: string
  company: string
  message: string
  pageUri?: string
}): Promise<void> {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_CONTACT_FORM_GUID

  if (!portalId || !formGuid) {
    throw new Error('HubSpot credentials not configured.')
  }

  const [firstName, ...rest] = data.name.trim().split(' ')
  const lastName = rest.join(' ') || '-'

  await submitToHubSpot({
    portalId,
    formGuid,
    fields: [
      { name: 'firstname', value: firstName },
      { name: 'lastname', value: lastName },
      { name: 'email', value: data.email },
      { name: 'company', value: data.company },
      { name: 'message', value: data.message },
    ],
    context: {
      pageUri: data.pageUri ?? 'https://aplicatech.com/contact',
      pageName: 'Contact Form',
    },
  })
}

export async function submitLeadMagnetForm(data: {
  firstname: string
  email: string
  company: string
  assetId: string
  pageUri?: string
}): Promise<void> {
  // Use env vars if set, otherwise fall back to the hardcoded embed credentials
  const portalId = process.env.HUBSPOT_PORTAL_ID ?? '148229316'
  const formGuid = process.env.HUBSPOT_LEAD_MAGNET_FORM_GUID ?? '45bde496-c61e-4a76-9430-99833be4224a'

  await submitToHubSpot({
    portalId,
    formGuid,
    fields: [
      { name: 'firstname', value: data.firstname },
      { name: 'email',     value: data.email },
      { name: 'company',   value: data.company },
      { name: 'lead_magnet_asset', value: data.assetId },
    ],
    context: {
      pageUri: data.pageUri ?? 'https://aplicatech.com',
      pageName: 'Lead Magnet Download',
    },
  })
}
